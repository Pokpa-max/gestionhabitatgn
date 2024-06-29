import { db } from '@/lib/firebase/client_config'
import { useAuthUser } from 'next-firebase-auth'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { parseDocsData } from '@/utils/firebase/firestore'
import { FaWallet, FaUsers, FaUserPlus, FaTasks } from 'react-icons/fa'
import Chart from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2'

function DashboardCard() {
  const AuthUser = useAuthUser()
  const [totalHouses, setTotalHouse] = useState()
  const [totalAvailable, setTotalAvailable] = useState()
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)
  const [recentActivities, setRecentActivities] = useState([])
  const [financialSummary, setFinancialSummary] = useState({
    income: 0,
    expenses: 0,
  })

  useEffect(() => {
    const houseRef = collection(db, 'houses')
    const userRef = collection(db, 'users')
    const activityRef = collection(db, 'activities')
    const financialRef = collection(db, 'financials')

    const fetchData = async () => {
      const q =
        AuthUser.claims.userType == 'admin'
          ? query(houseRef, orderBy('createdAt', 'desc'))
          : query(
              houseRef,
              where('userId', '==', AuthUser.id),
              orderBy('createdAt', 'desc')
            )

      const qry =
        AuthUser.claims.userType == 'admin'
          ? query(
              houseRef,
              where('type', '==', 'manager'),
              where('isAvailable', '==', false),
              orderBy('createdAt', 'desc')
            )
          : query(
              houseRef,
              where('userId', '==', AuthUser.id),
              where('isAvailable', '==', false),
              orderBy('createdAt', 'desc')
            )

      const qury = query(userRef, orderBy('createdAt', 'desc'))
      const activityQuery = query(
        activityRef,
        orderBy('createdAt', 'desc'),
        limit(10)
      )
      const financialQuery = query(financialRef)

      const querySnapshot = await getDocs(q)
      const querysnapAvailable = await getDocs(qry)
      const queryUser = await getDocs(qury)
      const queryActivities = await getDocs(activityQuery)
      const queryFinancial = await getDocs(financialQuery)

      setTotalHouse(parseDocsData(querySnapshot))
      setTotalAvailable(parseDocsData(querysnapAvailable))
      setUsers(parseDocsData(queryUser))
      setRecentActivities(parseDocsData(queryActivities))

      const financialData = parseDocsData(queryFinancial)
      const income = financialData.reduce((acc, item) => acc + item.income, 0)
      const expenses = financialData.reduce(
        (acc, item) => acc + item.expenses,
        0
      )
      setFinancialSummary({ income, expenses })

      setLoading(false)
    }

    fetchData()
  }, [AuthUser.id])

  return (
    <div className="mb-2 flex flex-wrap">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <StatCard
            title="Total Maison"
            count={totalHouses?.length}
            icon={<FaWallet className="fa-2x text-white" />}
            bgColor="bg-cyan-500"
            textColor="text-green-400"
            iconDirection="down"
          />
          <StatCard
            title="Total disponible"
            count={totalHouses?.length - totalAvailable?.length}
            icon={<FaUsers className="fa-2x text-white" />}
            bgColor="bg-gray-500"
            textColor="text-blue-400"
            iconDirection="up"
          />
          {AuthUser.claims.userType == 'admin' && (
            <StatCard
              title="Total occupé"
              count={totalAvailable?.length}
              icon={<FaUserPlus className="fa-2x text-white" />}
              bgColor="bg-gray-500"
              textColor="text-orange-400"
              iconDirection="up"
            />
          )}
          <StatCard
            title="Total utilisateur"
            count={users?.length}
            icon={<FaTasks className="fa-2x text-white" />}
            bgColor="bg-gray-500"
          />

          <div className="w-full px-3 pt-3">
            <div className="rounded border bg-white p-8 shadow">
              <h3 className="mb-4 text-xl">Résumé Financier</h3>
              <div className="flex flex-row justify-between">
                <div>
                  <h5>Revenu Total</h5>
                  <p className="text-green-500">${financialSummary.income}</p>
                </div>
                <div>
                  <h5>Dépenses Totales</h5>
                  <p className="text-red-500">${financialSummary.expenses}</p>
                </div>
              </div>
              <Bar
                data={{
                  labels: ['Income', 'Expenses'],
                  datasets: [
                    {
                      label: 'Finances',
                      data: [
                        financialSummary.income,
                        financialSummary.expenses,
                      ],
                      backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                      ],
                      borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>

          <div className="w-full px-3 pt-3">
            <div className="rounded border bg-white p-8 shadow">
              <h3 className="mb-4 text-xl">Dernières Activités</h3>
              <ul>
                {recentActivities.map((activity, index) => (
                  <li key={index} className="mb-2 border-b pb-2">
                    <p>{activity.description}</p>
                    <small>
                      {new Date(activity.createdAt).toLocaleString()}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

function StatCard({
  title,
  count,
  icon,
  bgColor,
  textColor = 'text-white',
  iconDirection = 'up',
}) {
  return (
    <div className="w-full px-3 pt-3 md:w-1/2 xl:w-1/3">
      <div className={`rounded border ${bgColor} p-8 shadow`}>
        <div className="flex flex-row items-center">
          <div className="flex-shrink pl-1 pr-4">{icon}</div>
          <div className="flex-1 text-right">
            <h5 className="text-white">{title}</h5>
            <h3 className={`text-3xl ${textColor}`}>
              {count}
              <span className={textColor}>
                <i className={`fas fa-caret-${iconDirection}`}></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="flex w-full flex-wrap">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="w-full px-3 pt-3 md:w-1/2 xl:w-1/3">
          <div className="animate-pulse rounded border bg-gray-300 p-8 shadow">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pl-1 pr-4">
                <div className="h-12 w-12 rounded-full bg-gray-400"></div>
              </div>
              <div className="flex-1 text-right">
                <div className="mb-2 h-4 w-3/4 rounded bg-gray-400"></div>
                <div className="h-8 w-1/2 rounded bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardCard

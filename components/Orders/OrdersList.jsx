import React, { useState } from 'react'
import { RiFileCopy2Line } from 'react-icons/ri'
import { columnsOrder } from './_dataTable'
import OrderDetailsDrawer from './OrderDetailsDrawer'
import { useEffect } from 'react'
import { db } from '@/lib/firebase/client_config'
import { parseDocsData } from '@/utils/firebase/firestore'
import PaginationButton from './PaginationButton'
import {
  collectionGroup,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'
import { HITS_PER_PAGE } from '../../lib/constants'

function OrdersList() {
  const [data, setData] = useState(null)
  const [pagination, setPagination] = useState({
    page: 0,
    nbHits: 0,
    showPagination: true,
  })
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isLoadingP, setIsLoadingP] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const orderRef = collectionGroup(db, 'orders')
    const fetchData = async () => {
      setIsLoading(true)
      const q = query(
        orderRef,
        orderBy('createdAt', 'desc'),
        limit(HITS_PER_PAGE)
      )

      const querySnapshot = await getDocs(q)
      const newOrders = parseDocsData(querySnapshot)
      setData({
        newOrders,
        lastElement: querySnapshot.docs[querySnapshot.docs.length - 1],
      })
      setIsLoading(false)
    }
    fetchData()
  }, [])
  const newOrdersToShow = data?.newOrders ?? []

  const showMoreFirestore = async () => {
    const orderRef = collectionGroup(db, 'orders')
    setIsLoadingP(true)
    const lastElement = data.lastElement

    const q = query(
      orderRef,
      orderBy('createdAt', 'desc'),
      startAfter(lastElement),
      limit(HITS_PER_PAGE)
    )
    const querySnapshot = await getDocs(q)
    const newOrders = parseDocsData(querySnapshot)
    const nextData = {
      newOrders: [...data.newOrders, ...newOrders],
      lastElement: querySnapshot.docs[querySnapshot.docs.length - 1],
    }

    setPagination({ ...pagination, showPagination: newOrders.length > 0 })

    setData(nextData)
    setIsLoadingP(false)
  }

  return isLoading ? (
    <OrderSkleton />
  ) : (
    <OrdersTable
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      data={data}
      newOrders={newOrdersToShow}
      showMore={showMoreFirestore}
      pagination={pagination.showPagination}
      isLoading={isLoadingP || isLoading}
    />
  )
}

function OrdersTable({
  selectedOrder,
  setSelectedOrder,
  data,
  isLoading,
  pagination,
  newOrders,
  showMore,
}) {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div className="">
      <OrderDetailsDrawer
        order={selectedOrder}
        open={openDrawer}
        setOpen={setOpenDrawer}
      />
      <div className="mt-4 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-sm">
              <table className="min-w-full table-auto divide-y divide-gray-300 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    {columnsOrder.map((column, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold uppercase text-slate-500 sm:pl-6"
                      >
                        {column.Header}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold uppercase text-slate-500 sm:pl-6"
                    >
                      <span className="sr-only">Modifier</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {newOrders?.map((row, index) => (
                    <tr key={index}>
                      {columnsOrder.map((column, index) => {
                        const cell = row[column.accessor]
                        const element = column.Cell?.(cell) ?? cell
                        return <td key={index}>{element}</td>
                      })}
                      <td className="relative flex space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => {
                            setSelectedOrder(row)
                            setOpenDrawer(true)
                          }}
                          type="button"
                          className="text-black-900 inline-flex items-center rounded-full border border-transparent bg-gray-200 p-3 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <RiFileCopy2Line
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="mt-5">{newOrders.length + ' Commandes'}</p>
              {pagination && <PaginationButton getmoreData={showMore} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersList

export function OrderSkleton() {
  return (
    <div class="animate-pulse">
      <div class="mt-3 mb-6 h-4 rounded bg-gray-200"></div>
      <div class="mb-6 h-4 rounded bg-gray-300"></div>
      <div class="mb-6 h-4 rounded bg-gray-200"></div>
      <div class="mb-6 h-4 rounded bg-gray-300"></div>
      <div class="mb-6 h-4 rounded bg-gray-200"></div>
      <div class="mt-3 mb-6 h-4 rounded bg-gray-200"></div>
      <div class="mb-6 h-4 rounded bg-gray-300"></div>
      <div class="mb-6 h-4 rounded bg-gray-200"></div>
      <div class="mb-6 h-4 rounded bg-gray-300"></div>
      <div class="mb-6 h-4 rounded bg-gray-200"></div>
    </div>
  )
}

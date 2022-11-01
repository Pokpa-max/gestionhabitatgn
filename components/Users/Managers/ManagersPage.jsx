import React from 'react'
import Header from '@/components/Header'
import UsersList from '../UsersList'
import { db } from '@/lib/firebase/client_config'

import { parseDocsData } from '@/utils/firebase/firestore'

import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import { HITS_PER_PAGE } from '../../../lib/constants'

function ManagersPage() {
  const [data, setData] = useState(null)
  const [pagination, setPagination] = useState({
    page: 0,
    nbHits: 0,
    showPagination: true,
  })
  const [isLoadingP, setIsLoadingP] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const managerRef = collection(db, 'restaurants')
    const fetchData = async () => {
      setIsLoading(true)
      const q = query(
        managerRef,
        orderBy('createdAt', 'desc'),
        limit(HITS_PER_PAGE)
      )

      const querySnapshot = await getDocs(q)
      const restaurants = parseDocsData(querySnapshot)
      setData({
        restaurants,
        lastElement: querySnapshot.docs[querySnapshot.docs.length - 1],
      })
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className="flex-1 py-6">
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <Header title={'Managers'} />
        <UsersList />
      </div>
    </div>
  )
}

export default ManagersPage

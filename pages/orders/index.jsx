import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import {
  collectionGroup,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { db } from '@/lib/firebase/client_config'
import { parseDocsData } from '@/utils/firebase/firestore'

import OrdersList from '../../components/Orders/OrdersList'
import OrdersPageHeader from '../../components/Orders/OrdersPageHeader'
import { useState } from 'react'
import { HITS_PER_PAGE } from '../../lib/constants'

function Orders() {
  const [data, setData] = useState(null)
  const [pagination, setPagination] = useState({
    page: 0,
    nbHits: 0,
    showPagination: true,
  })
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

  return (
    <Scaffold>
      <OrdersPageHeader />
      <OrdersList
        data={data}
        orders={newOrdersToShow}
        showMore={showMoreFirestore}
        pagination={pagination.showPagination}
        isLoading={isLoading}
        isLoadingP={isLoadingP}
      />
      {/* <OrdersList orders={orders} /> */}
    </Scaffold>
  )
}

const OrdersPage = () => (
  <Page name="Eat224 Admin | Commandes">
    <Orders />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})(OrdersPage)

import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import RestaurantStats from '@/components/Restaurant/RestaurantStats'

import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import OrdersList from '../../../components/Orders/OrdersList'
import { RiPieChart2Fill } from 'react-icons/ri'
import MenuPreview from '../../../components/Menu/MenuPreview'
import { useRouter } from 'next/router'
import { db } from '@/lib/firebase/client_config'
import { parseDocsData } from '@/utils/firebase/firestore'
import { useEffect, useState } from 'react'
import {
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore'
import { HITS_PER_PAGE } from '../../../lib/constants'

function RestaurantDetails() {
  const router = useRouter()
  const { restaurantId } = router.query

  const [isLoadingP, setIsLoadingP] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [restaurant, setRestaurant] = useState()

  const [data, setData] = useState(null)
  const [pagination, setPagination] = useState({
    page: 0,
    nbHits: 0,
    showPagination: true,
  })

  useEffect(() => {
    const orderRef = collectionGroup(db, 'orders')
    const restaurantRef = doc(db, 'restaurants', restaurantId)

    const fetchRestaurant = async () => {
      const docSnap = await getDoc(restaurantRef)
      if (docSnap.exists()) {
        setRestaurant(docSnap.data())
      }
    }

    const fetchRestaurantOrder = async () => {
      setIsLoading(true)
      const q = query(
        orderRef,
        where('restaurantId', '==', restaurantId),
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
    fetchRestaurant()
    fetchRestaurantOrder()
  }, [])

  const newOrdersToShow = data?.newOrders ?? []

  const showMoreFirestore = async () => {
    const orderRef = collectionGroup(db, 'orders')

    setIsLoadingP(true)
    const lastElement = data.lastElement

    const q = query(
      orderRef,
      where('restaurantId', '==', restaurantId),
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
      <div className="flex items-end justify-between">
        <Header title={restaurant?.restaurant?.name} />
        <div className="py-5">
          <button
            onClick={() => router.push(`${router.asPath}/menustats`)}
            className="flex items-center gap-1 bg-black p-2 text-sm text-white hover:bg-gray-700 "
          >
            <RiPieChart2Fill />
            Stats du Menu
          </button>
        </div>
      </div>
      <RestaurantStats restantName={restaurant?.name} />
      <p className="py-5 text-sm text-gray-500">Apercu du menu active</p>
      <MenuPreview
        restaurantId={restaurantId}
        isAccountCreated={restaurant?.isAccountCreated}
      />
      <p className="py-5 text-sm text-gray-500">Historique de commandes</p>
      <OrdersList
        data={data}
        orders={newOrdersToShow}
        showMore={showMoreFirestore}
        pagination={pagination.showPagination}
        isLoading={isLoading}
        isLoadingP={isLoadingP}
      />
    </Scaffold>
  )
}

const RestaurantDetailsPage = () => (
  <Page name="Eat224 Admin | Restaurants">
    <RestaurantDetails />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})(RestaurantDetailsPage)

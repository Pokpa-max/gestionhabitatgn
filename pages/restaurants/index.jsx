import Page from '@/components/Page'
import RestaurantsList from '@/components/Restaurant/RestaurantsList'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import { parseDocsData } from '@/utils/firebase/firestore'
import { db } from '@/lib/firebase/client_config'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import { HITS_PER_PAGE } from '../../lib/constants'

function Restaurants() {
  const [data, setData] = useState(null)
  const [pagination, setPagination] = useState({
    page: 0,
    nbHits: 0,
    showPagination: true,
  })
  const [isLoadingP, setIsLoadingP] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const orderRef = collection(db, 'restaurants')
    const fetchData = async () => {
      setIsLoading(true)
      const q = query(
        orderRef,
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
  const restaurantsToShow = data?.restaurants ?? []

  const showMoreFirestore = async () => {
    const orderRef = collection(db, 'restaurants')
    setIsLoadingP(true)
    const lastElement = data.lastElement

    const q = query(
      orderRef,
      orderBy('createdAt', 'desc'),
      startAfter(lastElement),
      limit(HITS_PER_PAGE)
    )
    const querySnapshot = await getDocs(q)
    const restaurants = parseDocsData(querySnapshot)
    const nextData = {
      restaurants: [...data.restaurants, ...restaurants],
      lastElement: querySnapshot.docs[querySnapshot.docs.length - 1],
    }

    setPagination({ ...pagination, showPagination: restaurants.length > 0 })

    setData(nextData)
    setIsLoadingP(false)
  }

  return (
    <Scaffold>
      <Header title={'Restaurants'} />
      <RestaurantsList
        data={data}
        restaurants={restaurantsToShow}
        showMore={showMoreFirestore}
        pagination={pagination.showPagination}
        isLoading={isLoading}
        isLoadingP={isLoadingP}
      />
    </Scaffold>
  )
}

const RestaurantsPage = () => (
  <Page name="Eat224 Admin | Restaurants">
    <Restaurants />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})(RestaurantsPage)

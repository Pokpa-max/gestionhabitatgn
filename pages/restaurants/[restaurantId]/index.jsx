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
import { ordersRestaurant } from '../../../_data'
import { RiPieChart2Fill } from 'react-icons/ri'
import MenuPreview from '../../../components/Menu/MenuPreview'
import { useRouter } from 'next/router'

function RestaurantDetails() {
  const router = useRouter()
  console.log('router', router)
  return (
    <Scaffold>
      <div className="flex items-end justify-between">
        <Header title={'Mim s Burger'} />
        <div className="py-5">
          <button
            onClick={() => router.push(`${router.asPath}/menustats`)}
            className="flex items-center gap-1 p-2 text-sm text-white bg-black hover:bg-gray-700 "
          >
            <RiPieChart2Fill />
            Stats du Menu
          </button>
        </div>
      </div>
      <RestaurantStats />
      <p className="py-5 text-sm text-gray-500">Apercu du menu active</p>
      <MenuPreview />
      <p className="py-5 text-sm text-gray-500">Historique de commandes</p>
      <OrdersList orders={ordersRestaurant} />
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

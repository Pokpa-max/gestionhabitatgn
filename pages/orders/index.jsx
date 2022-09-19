import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import OrdersList from '../../components/Orders/OrdersList'
import OrdersPageHeader from '../../components/Orders/OrdersPageHeader'
import { orders } from '../../_data'

function Orders() {
  return (
    <Scaffold>
      <OrdersPageHeader />
      <OrdersList orders={orders} />
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

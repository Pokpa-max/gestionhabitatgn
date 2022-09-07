import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import OrdersStats from '../../components/Orders/OrdersStats'
import OrdersList from '../../components/Orders/OrdersList'

function Orders() {
  return (
    <Scaffold>
      <Header title={'Orders'} />
      <OrdersList />
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

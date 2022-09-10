import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import PaymentsList from '../../components/Payments/PaymentsList'

function Payments() {
  return (
    <Scaffold>
      <Header title={'Paiements'} />
      <PaymentsList />
    </Scaffold>
  )
}

const PaymentsPage = () => (
  <Page name="Eat224 Admin | paiements">
    <Payments />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
  // whenAuthed: AuthAction.REDIRECT_TO_APP,
})(PaymentsPage)

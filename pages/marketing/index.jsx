import Page from '@/components/Page'
import PromotionsTypes from '@/components/Promotion/PromotionsTypes'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

function Promotions() {
  return (
    <Scaffold>
      <Header title={'Promotions'} />
      <PromotionsTypes />
    </Scaffold>
  )
}

const PromotionsPage = () => (
  <Page name="Eat224 Admin | Promotions">
    <Promotions />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
})(PromotionsPage)

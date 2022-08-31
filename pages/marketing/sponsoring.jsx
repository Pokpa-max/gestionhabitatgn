import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import SponsoringList from '../../components/Promotion/SponsoringList'

function Sponsoring() {
  return (
    <Scaffold>
      <Header title={'Sponsoring'} />
      <SponsoringList />
    </Scaffold>
  )
}

const SponsoringPage = () => (
  <Page name="Marketing - Sponsoring">
    <Sponsoring />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
})(SponsoringPage)

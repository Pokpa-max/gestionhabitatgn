import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import CommercialsList from '../../components/Promotion/CommercialsList'

function Community() {
  return (
    <Scaffold>
      <Header title={'Community'} />
      <CommercialsList />
    </Scaffold>
  )
}

const CommunityPage = () => (
  <Page name="Marketing - Community">
    <Community />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
})(CommunityPage)

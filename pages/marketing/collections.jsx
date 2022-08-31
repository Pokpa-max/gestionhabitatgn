import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import CollectionsList from '../../components/Promotion/CollectionsList'

function Collections() {
  return (
    <Scaffold>
      <Header title={'Collections'} />
      <CollectionsList />
    </Scaffold>
  )
}

const CollectionsPage = () => (
  <Page name="Marketing - Collections">
    <Collections />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
})(CollectionsPage)

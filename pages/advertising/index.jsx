import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import AdvertisinglsList from '../../components/adverstising/advertisingList'

function Advertising() {
  return (
    <Scaffold>
      <Header title={'Publicité'} />
      <AdvertisinglsList />
    </Scaffold>
  )
}

const AdvertisingPage = () => (
  <Page name="Publicité">
    <Advertising />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
})(AdvertisingPage)

import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'

import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

function Home() {
  return (
    <Scaffold>
      <Header title={'Acceuil'} />
      {/* <DashbordCard /> */}
    </Scaffold>
  )
}

const HomePage = () => (
  <Page name="Meloger - Admin">
    <Home />
  </Page>
)
export default HomePage

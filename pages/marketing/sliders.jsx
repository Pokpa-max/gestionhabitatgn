import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import SlidersList from '@/components/Promotion/SlidersList'

function Sliders() {
  return (
    <Scaffold>
      <Header title={'Sliders'} />
      <SlidersList />
    </Scaffold>
  )
}

const SlidersPage = () => (
  <Page name="Marketing - Sliders">
    <Sliders />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
})(SlidersPage)

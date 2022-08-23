import Page from '@/components/Page'
import RestaurantsList from '@/components/Restaurant/RestaurantsList'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

function Restaurants() {
  return (
    <Scaffold>
      <Header title={'Restaurants'} />
      <RestaurantsList />
    </Scaffold>
  )
}

const RestaurantsPage = () => (
  <Page name="Eat224 Admin | Restaurants">
    <Restaurants />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({
  whenAuthedBeforeRedirect: AuthAction.RENDER,
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(RestaurantsPage)

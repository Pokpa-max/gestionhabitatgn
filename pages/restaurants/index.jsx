import Page from '@/components/Page'
import RestaurantsList from '@/components/Restaurant/RestaurantsList'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'

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

export default RestaurantsPage

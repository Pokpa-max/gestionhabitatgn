import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import Header from '@/components/Header'

function Home() {
  return (
    <Scaffold>
      <Header title={'Details'} />
    </Scaffold>
  )
}

const HomePage = () => (
  <Page name="Eat224 - Admin">
    <Home />
  </Page>
)

export default HomePage

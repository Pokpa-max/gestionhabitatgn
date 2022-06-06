import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'
import MenuTabs from '@/components/Menu/MenuTabs'

function Menu() {
  return (
    <Scaffold title={'Menu'}>
      <div className="flex flex-1 w-full">
        <MenuTabs />
      </div>
    </Scaffold>
  )
}

const MenuPage = () => (
  <Page name="Gestionnaire du Menu | Eat224">
    <Menu />
  </Page>
)

export default MenuPage

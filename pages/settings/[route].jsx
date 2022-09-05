import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  RiAppsFill,
  RiDiscFill,
  RiFunctionFill,
  RiInformationFill,
} from 'react-icons/ri'

import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'

import Page from '@/components/Page'
import Scaffold from '@/components/Scaffold'

import Link from 'next/link'
import CategoriesPage from '../../components/Settings/Categories/CategoriesPage'
import BundlesPage from '../../components/Settings/Bundles/BundlesPage'
import DishesPage from '../../components/Settings/Dishes/DishesPage'
import AppInfo from '../../components/Settings/AppInfo'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Settings() {
  const router = useRouter()
  const currentPath = router.query.route

  const subNavigation = [
    {
      name: 'Categories',
      href: `categories`,
      icon: RiAppsFill,
      current: currentPath === `categories`,
      component: <CategoriesPage />,
    },
    {
      name: 'Bundles',
      href: `bundles`,
      icon: RiFunctionFill,
      current: currentPath === `bundles`,
      component: <BundlesPage />,
    },
    {
      name: 'Espace decouverte',
      href: `discoveries`,
      icon: RiDiscFill,
      current: currentPath === `discoveries`,
      component: <DishesPage />,
    },
    {
      name: 'Informations',
      href: `infos`,
      icon: RiInformationFill,
      current: currentPath === `infos`,
      component: <AppInfo />,
    },
  ]

  const findSlugMatchingCmp = () =>
    subNavigation.find((link) => link.href === currentPath)

  useEffect(() => {
    const foundComponent = findSlugMatchingCmp()
    if (currentPath && !foundComponent) router.push('/404')
  }, [router])

  const cmp = findSlugMatchingCmp()?.component

  return (
    <Scaffold
      subNav={
        <main className="relative h-screen ">
          <div className="h-screen bg-white ">
            <div className="h-screen divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-2">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <Link passHref key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          item.current
                            ? 'bg-primary text-white'
                            : 'text-black-900 hover:bg-primary hover:text-white',
                          'group flex items-center px-2 py-3 text-sm font-medium hover:cursor-pointer'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-white'
                              : 'text-primary group-hover:text-white',
                            'mr-3 h-7 w-7 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </aside>
              <div className="divide-y divide-gray-200 lg:col-span-10">
                {cmp}
              </div>
            </div>
          </div>
        </main>
      }
      title={'Parametres'}
    />
  )
}

const SettingsPage = () => (
  <Page name="Settings | Eat224">
    <Settings />
  </Page>
)

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async () => {
  return {
    props: {},
  }
})
export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(SettingsPage)

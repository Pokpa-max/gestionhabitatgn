import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {
  RiSafe2Fill,
  RiMenuFill,
  RiCloseFill,
  RiSettings2Fill,
  RiStore3Fill,
  RiAlarmWarningFill,
  RiGroupFill,
  RiDashboard2Fill,
  RiNewspaperFill,
  RiMotorbikeFill,
} from 'react-icons/ri'

import NavItem from './NavItem'
import Link from 'next/link'
import { useAuthUser } from 'next-firebase-auth'

const navigation = [
  { name: 'Acceuil', href: '/', icon: RiDashboard2Fill },
  { name: 'Restaurants', href: '/restaurants', icon: RiStore3Fill },
  { name: 'Commandes', href: '/orders', icon: RiMotorbikeFill },
  { name: 'Rapports', href: '/reports', icon: RiNewspaperFill },
  { name: 'Paiements', href: '/payments', icon: RiSafe2Fill },
  { name: 'Promotions', href: '/marketing', icon: RiAlarmWarningFill },
  {
    name: 'Utilisateurs',
    href: '/users',
    icon: RiGroupFill,
  },

  {
    name: 'Parametres',
    href: '/settings',
    icon: RiSettings2Fill,
  },
]

export default function Scaffold({ children, title, subNav }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const AuthUser = useAuthUser()

  return (
    <>
      <div className="relative">
        {/* dynamic sidebar for mobile */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <RiCloseFill
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center flex-shrink-0 px-4">
                    <img
                      className="w-auto h-8"
                      src="/images/logo.png"
                      alt="Eat224"
                    />
                  </div>
                  <nav className="px-2 mt-5 space-y-1">
                    {navigation.map((item) => (
                      <NavItem key={item.name} item={item} />
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
                  <a href="#" className="flex-shrink-0 block group">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block w-10 h-10 rounded-full"
                          src="https://pps.whatsapp.net/v/t61.24694-24/157381423_714662729958382_3255548508171682425_n.jpg?ccb=11-4&oh=66269bf17dc70b43bbcbd4949c6d81c9&oe=62B022BF"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Amadou Tidiane Bah
                        </p>
                        <button
                          onClick={AuthUser.signOut}
                          className="text-sm font-medium text-gray-500 group-hover:text-gray-700"
                        >
                          Se deconnecter
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="w-10 h-auto"
                  src="/images/logo.png"
                  alt="Eat224"
                />
                <h1 className="ml-2 text-2xl">
                  <span className="font-extrabold text-primary-accent">
                    EAT224
                  </span>
                  ADMIN
                </h1>
              </div>
              <nav className="flex-1 px-2 mt-5 space-y-1 bg-white">
                {navigation.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
              <Link href={'/auth/signin'}>
                <a className="flex-shrink-0 block w-full group">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block rounded-full h-9 w-9"
                        src="https://pps.whatsapp.net/v/t61.24694-24/157381423_714662729958382_3255548508171682425_n.jpg?ccb=11-4&oh=66269bf17dc70b43bbcbd4949c6d81c9&oe=62B022BF"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        Amadou Tidiane Bah
                      </p>
                      <button
                        onClick={AuthUser.signOut}
                        className="text-xs font-medium text-gray-500 group-hover:text-gray-700"
                      >
                        Se deconnecter
                      </button>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 md:pl-64">
          <div className="sticky top-0 z-10 pt-1 pl-1 bg-white sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="focus:ring-black-500 -ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <RiMenuFill className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          {subNav ? (
            subNav
          ) : (
            <main className="flex-1">
              <div className="flex-1 py-6 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {title}
                  </h1>
                </div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                  {/* Replace with your content */}
                  {children}
                  {/* /End replace */}
                </div>
              </div>
            </main>
          )}
        </div>
      </div>
    </>
  )
}

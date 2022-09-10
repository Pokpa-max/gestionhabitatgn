import React from 'react'
import {
  RiHandCoinFill,
  RiRestaurantFill,
  RiServiceFill,
  RiTakeawayFill,
} from 'react-icons/ri'
import MenuPopover from '../MenuPopover'

const periods = [
  { name: 'Jour', href: '#', current: true },
  { name: 'Semaine', href: '#', current: false },
  { name: 'Mois', href: '#', current: false },
  { name: 'Anneé', href: '#', current: false },
]

function PaymentsStats() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 p-4 space-y-2 bg-black lg:col-span-4">
          <h1 className="text-sm text-gray-50/75">Mouvements globals</h1>
          <div className="flex flex-col px-5 py-3 space-y-2">
            <div className="space-y-2">
              <p className="text-green-400">Entrèe</p>
              <p className="text-3xl leading-none text-white whitespace-nowrap lg:text-2xl xl:text-3xl">
                145 000 000
                <span className="ml-1 text-lg leading-none text-gray-500">
                  GNF
                </span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-red-400">Sortie</p>
              <p className="text-3xl leading-none text-white whitespace-nowrap lg:text-2xl xl:text-3xl">
                95 000 000
                <span className="ml-1 text-lg leading-none text-gray-500">
                  GNF
                </span>
              </p>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex items-end justify-between">
            <h1 className="text-sm text-gray-50/75">
              <span className="text-gray-50">134</span> paiements
            </h1>
            <MenuPopover options={periods} label="Toute periode" />
          </div>
        </div>
        <div className="grid grid-cols-8 col-span-12 gap-4 lg:col-span-8">
          <div className="flex flex-col col-span-8 gap-4 sm:col-span-4">
            <div className="h-32 col-span-4 p-4 py-6 space-y-4 border border-gray-100 bg-slate-100 sm:col-span-2">
              <div className="flex items-center space-x-2">
                <RiRestaurantFill className="text-gray-500" />
                <h1 className="text-sm text-gray-500">Paiements restaurants</h1>
              </div>
              <p className="text-3xl leading-none text-gray-700 whitespace-nowrap lg:text-2xl xl:text-3xl">
                105 000 000
                <span className="ml-1 text-lg leading-none text-gray-500">
                  GNF
                </span>
              </p>
            </div>

            <div className="h-32 col-span-4 p-4 py-6 space-y-4 border border-gray-100 bg-slate-100 sm:col-span-2">
              <div className="flex items-center space-x-2">
                <RiServiceFill className="text-gray-500" />
                <h1 className="text-sm text-gray-500">Frais de service</h1>
              </div>
              <p className="text-3xl leading-none text-gray-700 whitespace-nowrap lg:text-2xl xl:text-3xl">
                55 000 000
                <span className="ml-1 text-lg leading-none text-gray-500">
                  GNF
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col col-span-8 gap-4 sm:col-span-4">
            <div className="h-32 col-span-4 p-4 py-6 space-y-4 border border-gray-100 bg-slate-100 sm:col-span-2">
              <div className="flex items-center space-x-2">
                <RiTakeawayFill className="text-gray-500" />
                <h1 className="text-sm text-gray-500">Paiements livraisons</h1>
              </div>

              <p className="text-3xl leading-none text-gray-700 whitespace-nowrap lg:text-2xl xl:text-3xl">
                15 000 000
                <span className="ml-1 text-lg leading-none text-gray-500">
                  GNF
                </span>
              </p>
            </div>
            <div className="h-32 col-span-4 p-4 py-6 space-y-4 border border-gray-100 bg-slate-100 sm:col-span-2">
              <div className="flex items-center space-x-2">
                <RiHandCoinFill className="text-gray-500" />
                <h1 className="text-sm text-gray-500">
                  Commission sur commandes
                </h1>
              </div>

              <p className="text-3xl leading-none text-gray-700 whitespace-nowrap lg:text-2xl xl:text-3xl">
                65 000 000
                <span className="ml-1 text-lg leading-none text-gray-500">
                  GNF
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentsStats

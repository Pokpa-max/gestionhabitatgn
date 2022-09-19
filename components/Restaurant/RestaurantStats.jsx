import { useRouter } from 'next/router'
import React from 'react'
import { RiStarFill, RiTakeawayFill } from 'react-icons/ri'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
}

function RestaurantStats() {
  const router = useRouter()
  console.log('router', router)
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 px-6 py-4 space-y-1 bg-black sm:col-span-12 lg:col-span-6">
          <div className="flex justify-between ">
            <div className="space-y-2 text-gray-50/75 ">
              <p>CA Restaurant</p>
              <p className="text-3xl text-white sm:text-xl lg:text-3xl ">
                154 000 000 <span className="text-sm">GNF</span>
              </p>
            </div>
            <div className="space-y-2 text-gray-50/75 ">
              <p>Commission payé</p>
              <p className="text-3xl text-white sm:text-xl lg:text-3xl ">
                154 000 000 <span className="text-sm">GNF</span>
              </p>
            </div>
          </div>
          <p className="text-xs text-white">134 paiements</p>
        </div>
        <div className="grid grid-cols-12 col-span-12 gap-4 sm:col-span-12 sm:grid-cols-6 lg:col-span-6">
          <div className="col-span-6 bg-slate-100 sm:col-span-3">
            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-500">Visites restaurant</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">
                  <span className="text-teal-500">143</span> utilisateurs avec
                  compte
                </p>
                <p className="text-sm text-gray-500">
                  <span className="text-teal-500">332</span> utilisateurs
                  invites
                </p>
                <p className="text-sm text-gray-500">
                  <span className="text-teal-500">475</span> utilisateurs
                  totales
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 bg-slate-100 sm:col-span-3">
            <div className="p-4">
              <p className="text-sm text-gray-500">Avis clients</p>
              <div>
                <div className="flex flex-col items-start gap-2 mt-3">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <RiStarFill
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? 'text-yellow-400'
                              : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} sur 5 etoiles</p>
                  </div>
                  <p className="text-sm text-gray-900 ">
                    Basé sur {reviews.totalCount} avis
                  </p>
                  <button className="text-sm text-gray-900 hover:underline">
                    <a href={`${router.asPath}/feedbacks`}>voir les notes</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 bg-slate-100 sm:col-span-3">
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-500">Commandes totales</p>
            <div className="flex items-center gap-3 text-gray-600">
              <p className="text-5xl text-black">125</p>
              <RiTakeawayFill className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-slate-100 sm:col-span-3">
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-500">Commandes livre</p>
            <div className="flex items-center gap-3 text-green-300">
              <p className="text-5xl text-green-400">120</p>
              <RiTakeawayFill className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-slate-100 sm:col-span-3">
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-500">Commandes annule</p>
            <div className="flex items-center gap-3 text-red-300">
              <p className="text-5xl text-red-400">5</p>
              <RiTakeawayFill className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-slate-100 sm:col-span-3">
          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-500">Commandes en cour</p>
            <div className="flex items-center gap-3 text-orange-300">
              <p className="text-5xl text-orange-400">6</p>
              <RiTakeawayFill className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantStats

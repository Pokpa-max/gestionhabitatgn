import { useRouter } from 'next/router'
import React from 'react'
import { RiStarFill, RiTakeawayFill } from 'react-icons/ri'
import restaurants from '../../pages/restaurants'

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

function RestaurantStats({ restaurantStat }) {
  const router = useRouter()

  const totalUser =
    restaurantStat === undefined
      ? 0
      : restaurantStat?.visit?.nbUserWithAccount +
        restaurantStat?.visit?.nbUserVisitor

  const totalOrder =
    restaurantStat === undefined
      ? 0
      : restaurantStat?.orders?.orderDelivered +
        restaurantStat?.orders?.orderInprogress +
        restaurantStat?.orders?.orderCanceled

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 space-y-1 bg-black px-6 py-4 sm:col-span-12 lg:col-span-6">
          <div className="flex justify-between ">
            <div className="space-y-2 text-gray-50/75 ">
              <p>CA Restaurant</p>
              <p className="text-3xl text-white sm:text-xl lg:text-3xl ">
                {restaurantStat?.sells?.paymentInvoice}{' '}
                <span className="text-sm">GNF</span>
              </p>
            </div>
            <div className="space-y-2 text-gray-50/75 ">
              <p>Commission payé</p>
              <p className="text-3xl text-white sm:text-xl lg:text-3xl ">
                {restaurantStat?.sells?.nbComission}{' '}
                <span className="text-sm">GNF</span>
              </p>
            </div>
          </div>
          <p className="text-xs text-white">
            {restaurantStat?.sells?.nbPayment} paiements
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-4 sm:col-span-12 sm:grid-cols-6 lg:col-span-6">
          <div className="col-span-6 bg-slate-100 sm:col-span-3">
            <div className="space-y-2 p-4">
              <p className="text-sm text-gray-500">Visites restaurant</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">
                  <span className="text-teal-500">
                    {restaurantStat?.visit?.nbUserWithAccount}
                  </span>{' '}
                  utilisateurs avec compte
                </p>
                <p className="text-sm text-gray-500">
                  <span className="text-teal-500">
                    {restaurantStat?.visit?.nbUserVisitor}
                  </span>{' '}
                  utilisateurs invites
                </p>
                <p className="text-sm text-gray-500">
                  <span className="text-teal-500">{totalUser}</span>{' '}
                  utilisateurs totales
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 bg-slate-100 sm:col-span-3">
            <div className="p-4">
              <p className="text-sm text-gray-500">Avis clients</p>
              <div>
                <div className="mt-3 flex flex-col items-start gap-2">
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
                    <p className="sr-only">
                      {restaurantStat?.customerReviews?.average} sur 5 etoiles
                    </p>
                  </div>
                  <p className="text-sm text-gray-900 ">
                    Basé sur {restaurantStat?.customerReviews?.totalCount} avis
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
          <div className="space-y-3 p-4">
            <p className="text-sm text-gray-500">Commandes totales</p>
            <div className="flex items-center gap-3 text-gray-600">
              <p className="text-5xl text-black">{totalOrder}</p>
              <RiTakeawayFill className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-slate-100 sm:col-span-3">
          <div className="space-y-3 p-4">
            <p className="text-sm text-gray-500">Commandes livre</p>
            <div className="flex items-center gap-3 text-green-300">
              <p className="text-5xl text-green-400">
                {' '}
                {restaurantStat?.orders?.orderDelivered}
              </p>
              <RiTakeawayFill className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-slate-100 sm:col-span-3">
          <div className="space-y-3 p-4">
            <p className="text-sm text-gray-500">Commandes annule</p>
            <div className="flex items-center gap-3 text-red-300">
              <p className="text-5xl text-red-400">
                {restaurantStat?.orders?.orderCanceled}
              </p>
              <RiTakeawayFill className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-slate-100 sm:col-span-3">
          <div className="space-y-3 p-4">
            <p className="text-sm text-gray-500">Commandes en cour</p>
            <div className="flex items-center gap-3 text-orange-300">
              <p className="text-5xl text-orange-400">
                {restaurantStat?.orders?.orderInprogress}
              </p>
              <RiTakeawayFill className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantStats

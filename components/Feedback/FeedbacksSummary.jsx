/* This example requires Tailwind CSS v2.0+ */
import { RiStarFill } from 'react-icons/ri'

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FeedbacksSummary() {
  return (
    <div className="my-4 bg-white border ">
      <div className="max-w-2xl px-4 py-5 mx-auto sm:py-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-10 lg:px-8">
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Avis clients
            </h2>
            <div className="flex items-center mt-3">
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
              <p className="ml-2 text-sm text-gray-900">
                Basé sur {reviews.totalCount} avis
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm leading-8 text-gray-500">
              Premier avis laissé le 22/02/2021
            </h3>
            <h3 className="text-sm leading-8 text-gray-500">
              Dernier avis laissé le 04/11/2022
            </h3>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>
            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex items-center flex-1">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="flex items-center flex-1 ml-1"
                    >
                      <RiStarFill
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative flex-1 ml-3">
                        <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="w-10 ml-3 text-sm text-right text-gray-900 tabular-nums">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

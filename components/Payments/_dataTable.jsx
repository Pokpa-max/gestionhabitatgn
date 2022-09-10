import { getCurrentDate, getCurrentHour } from '../../utils/date'
import { currencyFormatter } from '../../utils/ui'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const columnsPayment = [
  {
    Header: 'id',
    accessor: 'id',
    Cell: (data) => {
      return (
        <div className="flex items-center justify-start py-4 pl-4 pr-3 space-x-1 ">
          <p className="text-sm text-gray-500 truncate whitespace-nowrap font-stratos-light">
            #{data}
          </p>
        </div>
      )
    },
  },
  {
    Header: 'Paiement',
    accessor: 'paymentDescription',
    Cell: (data) => {
      return (
        <div className="flex flex-col items-start justify-start py-4 space-y-1">
          <div className="flex items-center space-x-1">
            <p className="px-2 text-xs rounded-full whitespace-nowrap bg-amber-100 text-amber-500 ">
              {data.type}
            </p>{' '}
            <p className="text-sm font-bold text-gray-900 whitespace-nowrap ">
              {data.sourceDescription}
            </p>
          </div>
          <p className="px-1 text-xs text-gray-500 bg-gray-100 rounded-full whitespace-nowrap ">
            {data.sourceId}
          </p>
        </div>
      )
    },
  },
  {
    Header: 'Initiateur',
    accessor: 'initiator',
    Cell: (data) => {
      return (
        <div className="flex flex-col items-start justify-start py-4 space-y-1">
          <p className="text-sm font-bold text-gray-900 whitespace-nowrap ">
            {data.name}
          </p>
          <p className="px-1 text-xs text-gray-500 bg-gray-100 rounded-full whitespace-nowrap ">
            {data.id}
          </p>
        </div>
      )
    },
  },
  {
    Header: 'Nature',
    accessor: 'paymentDescription',
    Cell: ({ nature }) => {
      return (
        <span
          className={classNames(
            nature === 'entree'
              ? 'bg-green-100 text-green-500'
              : 'bg-red-100 text-red-500',
            'inline-flex items-center rounded-full  px-2 text-xs uppercase'
          )}
        >
          {nature}
        </span>
      )
    },
  },
  {
    Header: 'Reference',
    accessor: 'paymentReference',
    Cell: (data) => {
      return (
        <div className="flex flex-col items-start justify-start py-4 space-y-1">
          <p className="px-2 py-1 text-xs uppercase rounded-full w-min whitespace-nowrap bg-sky-100 text-sky-500">
            {data.paymentMethod}
          </p>
          <p className="px-1 text-xs text-gray-500 bg-gray-100 rounded-full whitespace-nowrap ">
            {data.paymentReference}
          </p>
        </div>
      )
    },
  },

  {
    Header: 'Montant',
    accessor: 'paymentAmount',
    Cell: (data) => {
      return (
        <div className="flex flex-col items-start justify-start py-4 space-x-1 ">
          <p className="font-bold text-gray-900 text-md whitespace-nowrap sm:pl-6">
            {currencyFormatter(data?.total)}
          </p>
        </div>
      )
    },
  },
  {
    Header: 'Date de création',
    accessor: 'createdAt',
    Cell: (data) => {
      return (
        <div className="flex flex-col items-start justify-start py-4 space-x-1 ">
          <p className="px-3 text-sm text-gray-500 whitespace-nowrap font-stratos-light">
            {getCurrentDate()}
          </p>
          <p className="px-3 text-sm text-gray-500 whitespace-nowrap">
            {getCurrentHour()}
          </p>
        </div>
      )
    },
  },
]

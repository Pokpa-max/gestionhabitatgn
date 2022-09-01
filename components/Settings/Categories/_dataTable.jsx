import { Timestamp } from 'firebase/firestore'
import Link from 'next/link'
import { firebaseDateFormat, timeBetween } from '@/utils/date'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const columnsCategory = [
  {
    Header: 'Id',
    accessor: 'id',
    Cell: (data) => {
      return (
        <div className="flex-col p-4 line-clamp-2">
          <p className="text-sm text-gray-500 truncate whitespace-nowrap font-stratos-light">
            {data}
          </p>
        </div>
      )
    },
  },
  {
    Header: 'Nom',
    accessor: 'name',
    Cell: (data) => {
      return (
        <div className="flex items-center justify-start py-4 pl-4 pr-3 space-x-1 ">
          <div className="text-sm font-bold text-gray-900 group whitespace-nowrap sm:pl-6">
            <Link href={'/'}>
              <a className="group-hover:text-primary group-hover:underline">
                {data}
              </a>
            </Link>
          </div>
        </div>
      )
    },
  },

  {
    Header: 'Nbr Restaurants',
    accessor: 'nbPlaces',
    Cell: (data) => {
      return (
        <div className="px-3 text-sm text-gray-500 capitalize whitespace-nowrap font-stratos-light">
          {data}
        </div>
      )
    },
  },
  {
    Header: 'Status',
    accessor: 'isActive',
    Cell: (isActive) => {
      return (
        <span
          className={classNames(
            isActive
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800',
            'inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs font-medium '
          )}
        >
          <svg
            className={classNames(
              isActive ? 'text-green-400' : 'text-red-400',
              '-ml-0.5 mr-1.5 h-2 w-2 '
            )}
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      )
    },
  },
  {
    Header: 'Date de création',
    accessor: 'createdAt',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="px-3 text-sm text-gray-500 whitespace-nowrap font-stratos-light">
            {firebaseDateFormat(data)}
          </div>
        </div>
      )
    },
  },
]

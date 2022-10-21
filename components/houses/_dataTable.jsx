import Link from 'next/link'
import { firebaseDateFormat } from '../../utils/date'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const columnsHouse = [
  {
    Header: 'Type Logement',
    accessor: 'restaurant',
    Cell: (data) => {
      return (
        <div className="flex items-center justify-start space-x-1 py-4 pl-4 pr-3 ">
          <div className="group whitespace-pre-wrap text-sm font-bold text-gray-900 sm:pl-6">
            <Link href={'/'}>
              <a className="group-hover:text-primary group-hover:underline">
                {data.name}
              </a>
            </Link>
            <p className="w-2/4 truncate whitespace-nowrap font-stratos-light text-sm text-gray-500">
              {data.description}
            </p>
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Commune',
    accessor: 'manager',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="text-black-900 whitespace-nowrap px-3 text-sm font-bold">
            {data.firstname} {data.lastname}
          </div>
          <div className="whitespace-nowrap px-3 text-sm text-gray-500">
            {data.phoneNumber}
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Quartier',
    accessor: 'adress',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="text-black-900 w-2/4 truncate whitespace-nowrap px-3 text-sm font-bold">
            {data.description}
          </div>
          <div className="whitespace-nowrap px-3 font-stratos-light text-sm text-gray-500">
            {data.zone}
          </div>
        </div>
      )
    },
  },

  {
    Header: 'Date dAjout',
    accessor: 'createdAt',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="whitespace-nowrap px-3 font-stratos-light text-sm text-gray-500">
            {firebaseDateFormat(data)}
          </div>
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
]

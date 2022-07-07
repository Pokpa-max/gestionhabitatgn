import Link from 'next/link'
import { firebaseDateFormat } from '../../utils/date'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const columnsRestaurant = [
  {
    Header: 'Restaurant',
    accessor: 'restaurant',
    Cell: (data) => {
      return (
        <div className="flex items-center justify-start py-4 pl-4 pr-3 space-x-1 ">
          <div className="text-sm font-bold text-gray-900 group whitespace-nowrap sm:pl-6">
            <Link href={'/'}>
              <a className="group-hover:text-primary group-hover:underline">
                {data.name}
              </a>
            </Link>
            <p className="text-sm text-gray-500 w2/4 whitespace-nowrap font-stratos-light">
              {data.description}
            </p>
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Gestionnaire',
    accessor: 'manager',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="px-3 text-sm font-bold text-black-900 whitespace-nowrap">
            {data.firstname} {data.lastname}
          </div>
          <div className="px-3 text-sm text-gray-500 whitespace-nowrap">
            {data.phoneNumber}
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Email',
    accessor: 'email',
    Cell: (data) => {
      return (
        <div className="px-3 text-sm text-gray-500 whitespace-nowrap font-stratos-light">
          <a href={`mailto:${data}`}>{data}</a>
        </div>
      )
    },
  },
  {
    Header: 'Adresse',
    accessor: 'adress',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="px-3 text-sm font-bold text-black-900 whitespace-nowrap">
            {data.description}
          </div>
          <div className="px-3 text-sm text-gray-500 whitespace-nowrap font-stratos-light">
            {data.zone}
          </div>
        </div>
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

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
          <p className="truncate whitespace-nowrap font-stratos-light text-sm text-gray-500">
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
        <div className="flex items-center justify-start space-x-1 py-4 pl-4 pr-3 ">
          <div className="group whitespace-nowrap text-sm font-bold text-gray-900 sm:pl-6">
            <Link
              href={'/'}
              className="group-hover:text-primary group-hover:underline"
              legacyBehavior
            >
              {data}
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
        <div className="whitespace-nowrap px-3 font-stratos-light text-sm capitalize text-gray-500">
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
          <div className="whitespace-nowrap px-3 font-stratos-light text-sm text-gray-500">
            {firebaseDateFormat(data)}
          </div>
        </div>
      )
    },
  },
]

export const columnsBundle = [
  {
    Header: 'Id',
    accessor: 'id',
    Cell: (data) => {
      return (
        <div className="flex-col p-4 line-clamp-2">
          <p className="truncate whitespace-nowrap font-stratos-light text-sm text-gray-500">
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
        <div className="flex items-center justify-start space-x-1 py-4 pl-4 pr-3 ">
          <div className="group whitespace-nowrap text-sm font-bold text-gray-900 sm:pl-6">
            <Link
              href={'/categories'}
              className="group-hover:text-primary group-hover:underline"
              legacyBehavior
            >
              {data}
            </Link>
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Avec categories',
    accessor: 'hasCategories',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap px-3 font-stratos-light text-sm capitalize text-gray-500">
          {data ? 'Avec ' : 'Sans'} Categories
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
          <div className="whitespace-nowrap px-3 font-stratos-light text-sm text-gray-500">
            {firebaseDateFormat(data)}
          </div>
        </div>
      )
    },
  },
]

export const columnsDish = [
  {
    Header: 'Id',
    accessor: 'id',
    Cell: (data) => {
      return (
        <div className="flex-col p-4 line-clamp-2">
          <p className="truncate whitespace-nowrap font-stratos-light text-sm text-gray-500">
            {data}
          </p>
        </div>
      )
    },
  },
  {
    Header: 'Nom',
    accessor: 'name',
    Cell: (name, description) => {
      return (
        <div className="flex-col py-4">
          <div className="text-black-900 whitespace-nowrap px-3 text-sm font-bold">
            {name}
          </div>
          <div className="whitespace-nowrap px-3 text-sm text-gray-500">
            {description}
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Specialité',
    accessor: 'speciality',
    Cell: (speciality, ingredients) => {
      return (
        <div className="flex-col py-4">
          <div className="text-black-900 whitespace-nowrap px-3 text-sm font-bold">
            {speciality}
          </div>
          <div className="whitespace-nowrap px-3 text-sm text-gray-500">
            {ingredients}
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Likes',
    accessor: 'likerCount',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap px-3 font-stratos-light text-sm capitalize text-gray-500">
          <span className="font-bold">{data}</span> likes
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
          <div className="whitespace-nowrap px-3 font-stratos-light text-sm text-gray-500">
            {firebaseDateFormat(data)}
          </div>
        </div>
      )
    },
  },
]

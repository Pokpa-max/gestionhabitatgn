import Image from 'next/image'
import { RiStarFill } from 'react-icons/ri'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const columnsFeedback = [
  {
    Header: 'Utilisateur',
    accessor: 'user',
    Cell: (data) => {
      return (
        <div className="flex items-center justify-center px-3 space-x-2 text-sm font-light text-gray-500 whitespace-nowrap">
          <Image
            src={data.avatarSrc}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 bg-gray-100 rounded-full"
          />
          <div className={'flex-1'}>
            <h3 className="font-medium text-gray-900">{data.username}</h3>
            <p>Inscrit depuis 22/03/2021</p>
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Categorie',
    accessor: 'category',
    Cell: (data) => {
      return (
        <span className="px-2 py-1 text-sm border rounded-full bg-primary-100 border-primary-500 text-primary-500">
          {data}
        </span>
      )
    },
  },
  {
    Header: 'Note',
    accessor: 'rating',
    Cell: (userRating) => {
      return (
        <div className="py-4 ">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <RiStarFill
                key={rating}
                className={classNames(
                  userRating > rating ? 'text-yellow-400' : 'text-gray-300',
                  'h-5 w-5 flex-shrink-0'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{userRating}/5 stars</p>
        </div>
      )
    },
  },
  {
    Header: 'Date',
    accessor: 'createdAt',
    Cell: (date) => {
      return (
        <div className="px-3 py-4 text-sm font-bold text-gray-500 whitespace-nowrap">
          {date}
        </div>
      )
    },
  },
]

export const columnsFeedbackGlobal = [
  {
    Header: 'Utilisateur',
    accessor: 'user',
    Cell: (data) => {
      return (
        <div className="flex items-center justify-center px-3 space-x-2 text-sm font-light text-gray-500 whitespace-nowrap">
          <Image
            src={data.avatarSrc}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 bg-gray-100 rounded-full"
          />
          <div className={'flex-1'}>
            <h3 className="font-medium text-gray-900">{data.username}</h3>
            <p>Inscrit depuis 22/03/2021</p>
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Etablissement',
    accessor: 'restaurant',
    Cell: (data) => {
      return (
        <div className="flex flex-col px-3 text-sm ">
          <h1 className="">Bamboo</h1>
          <h1 className="text-gray-500">sefuivbheairugrdbvd</h1>
        </div>
      )
    },
  },
  {
    Header: 'Categorie',
    accessor: 'category',
    Cell: (data) => {
      return (
        <span className="px-2 py-1 text-sm uppercase border rounded-full bg-primary-100 border-primary-500 text-primary-500">
          {data}
        </span>
      )
    },
  },
  {
    Header: 'Note',
    accessor: 'rating',
    Cell: (userRating) => {
      return (
        <div className="py-4 ">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <RiStarFill
                key={rating}
                className={classNames(
                  userRating > rating ? 'text-yellow-400' : 'text-gray-300',
                  'h-5 w-5 flex-shrink-0'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{userRating}/5 stars</p>
        </div>
      )
    },
  },
  {
    Header: 'Signalement',
    accessor: 'signal',
    Cell: (data) => {
      return (
        <span className="px-2 py-1 text-xs text-red-500 uppercase bg-red-100 rounded-full border-primary-400">
          Reporté
        </span>
      )
    },
  },
  {
    Header: 'Date',
    accessor: 'createdAt',
    Cell: (date) => {
      return (
        <div className="px-3 py-4 text-sm font-bold text-gray-500 whitespace-nowrap">
          {date}
        </div>
      )
    },
  },
]

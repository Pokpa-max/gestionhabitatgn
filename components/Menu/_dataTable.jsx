import Link from 'next/link'

export const columnsMenu = [
  {
    Header: 'Nom du menu',
    accessor: 'name',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-900 hover:text-primary hover:underline sm:pl-6">
          <Link href={'/'} legacyBehavior>
            {data}
          </Link>
        </div>
      )
    },
  },
  {
    Header: 'Description',
    accessor: 'description',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap px-3 py-4 text-sm font-light text-gray-500">
          {data}
        </div>
      )
    },
  },
  {
    Header: 'Categories',
    accessor: 'categories',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap px-3 py-4 text-sm font-bold text-gray-500">
          {data}
        </div>
      )
    },
  },
  {
    Header: 'Elements',
    accessor: 'items',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap px-3 py-4 text-sm font-bold text-gray-500">
          {data}
        </div>
      )
    },
  },
]

export const columnsCategories = [
  {
    Header: 'Nom catégorie',
    accessor: 'name',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-900 hover:text-primary hover:underline sm:pl-6">
          <Link href={'/'} legacyBehavior>
            {data}
          </Link>
        </div>
      )
    },
  },
  {
    Header: 'Note',
    accessor: 'note',
    Cell: (data) => {
      return (
        <div className="w2/4 whitespace-nowrap px-3 py-4 text-sm font-light text-gray-500">
          {data}
        </div>
      )
    },
  },
  {
    Header: 'Menus',
    accessor: 'menus',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="text-black-900 whitespace-nowrap px-3 text-sm font-bold">
            {data[0]}
          </div>
          <div className="whitespace-nowrap px-3 text-sm font-light text-gray-500">
            + {data.length - 1} autres menus
          </div>
        </div>
      )
    },
  },
  {
    Header: 'Elements',
    accessor: 'items',
    Cell: (data) => {
      return (
        <div className="whitespace-nowrap px-3 py-4 text-sm font-bold text-gray-500">
          {data}
        </div>
      )
    },
  },
]

export const columnsItems = [
  {
    Header: 'Nom élément',
    accessor: 'item',
    Cell: (data) => {
      return (
        <div className="flex items-center justify-start space-x-1 py-4 pl-4 pr-3 ">
          <img
            className="h-10 w-10 rounded-full object-center"
            src={data.imgUrl}
            alt=""
          />
          <div className="group whitespace-nowrap text-sm font-bold text-gray-900 sm:pl-6">
            <Link
              href={'/categories'}
              className="group-hover:text-primary group-hover:underline"
              legacyBehavior
            >
              {data.name}
            </Link>
            <p className="w2/4 whitespace-nowrap text-sm font-light text-gray-500">
              {data.description}
            </p>
          </div>
        </div>
      )
    },
  },

  {
    Header: 'Categories',
    accessor: 'categories',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <div className="text-black-900 whitespace-nowrap px-3 text-sm font-bold">
            {data[0]}
          </div>
          {data.length > 1 ? (
            <div className="whitespace-nowrap px-3 text-sm font-light text-gray-500">
              + {data.length - 1} autres menus
            </div>
          ) : null}
        </div>
      )
    },
  },
  {
    Header: 'Nombre de commande',
    accessor: 'nbrOrder',
    Cell: (data) => {
      return (
        <div className="flex flex-col py-4 text-center">
          <p className="whitespace-nowrap px-3 text-sm font-bold text-gray-500">
            12 cmd(s)
          </p>
        </div>
      )
    },
  },
  {
    Header: 'Chiffre d affaire',
    accessor: 'ca',
    Cell: (data) => {
      return (
        <div className="flex-col py-4">
          <p className="text-black-900 whitespace-nowrap px-3 text-sm font-bold">
            12 300 000 GNF
          </p>
        </div>
      )
    },
  },
]

import React, { useState } from 'react'
import { columnsHouse, columnsRestaurant } from './_dataTable'

import { RiFileEditLine, RiProfileLine, RiSearchLine } from 'react-icons/ri'
import { Router, useRouter } from 'next/router'
// import { OrderSkleton } from '../Orders/OrdersList'
// import PaginationButton from '../Orders/PaginationButton'
import HouseFormDrawer from './HouseFormDrawer'
import { OrderSkleton } from '../Orders/OrdersList'
import PaginationButton from '../Orders/PaginationButton'

function HousesList({
  data,
  setData,
  houses,
  showMore,
  pagination,
  isLoading,
  isLoadingP,
}) {
  const [selectedHouse, setSelectedHouse] = useState(null)
  console.log('voir les maisons', houses)

  return (
    <HousesTable
      selectedHouse={selectedHouse}
      setSelectedHouse={setSelectedHouse}
      isLoading={isLoading}
      houses={houses}
      isLoadingP={isLoadingP}
      showMore={showMore}
      data={data}
      setData={setData}
      pagination={pagination}
    />
  )
}

function HousesTable({
  selectedHouse,
  setSelectedHouse,
  data,
  setData,
  houses,
  showMore,
  pagination,
  isLoading,
  isLoadingP,
}) {
  const [openDrawer, setOpenDrawer] = useState(false)
  const router = useRouter()

  return isLoading ? (
    <OrderSkleton />
  ) : (
    <div className="">
      <HouseFormDrawer
        house={selectedHouse}
        open={openDrawer}
        setOpen={setOpenDrawer}
      />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <div className="flex flex-1 items-center ">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <RiSearchLine
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full rounded-sm border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-primary-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                  placeholder="Rechercher une categorie"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => {
              setOpenDrawer(true)
              setSelectedHouse(null)
            }}
            type="button"
            className="focus:ring-bg-cyan-500 inline-flex items-center justify-center rounded-sm border border-transparent bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
          >
            Ajouter un logement
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-sm">
              <table className="min-w-full table-auto divide-y divide-gray-300 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    {columnsHouse.map((column, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold uppercase text-slate-500 sm:pl-6"
                      >
                        {column.Header}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold uppercase text-slate-500 sm:pl-6"
                    >
                      <span className="sr-only">Modifier</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {houses?.map((row, index) => (
                    <tr key={index}>
                      {columnsHouse.map((column, index) => {
                        const cell = row[column.accessor]
                        const element = column.Cell?.(cell) ?? cell
                        return <td key={index}>{element}</td>
                      })}
                      <td className="relative flex space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => {
                            setSelectedHouse(row)
                            setOpenDrawer(true)
                          }}
                          type="button"
                          className="text-black-900 inline-flex items-center rounded-full border border-transparent bg-gray-200 p-3 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <RiFileEditLine
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </button>
                        <button
                          onClick={() => {
                            console.log('voir routes', router.pathname)
                            router?.push(`${router.pathname}/${row.id}`)
                          }}
                          type="button"
                          className="text-black-900 inline-flex items-center rounded-full border border-transparent bg-gray-200 p-3 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <RiProfileLine
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="mt-5">{houses.length + 'Logements'}</p>
            {pagination && houses.length > 0 && (
              <PaginationButton getmoreData={showMore} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HousesList

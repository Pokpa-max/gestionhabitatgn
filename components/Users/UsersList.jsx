import React from 'react'
import { columnsUser } from './_dataTable'
import { OrderSkleton } from '../Orders/OrdersList'
import PaginationButton from '../Orders/PaginationButton'
import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import DesableConfirmModal from '../DesableConfirm'

function UsersList({
  data,
  setData,
  customers,
  showMore,
  pagination,
  isLoading,
  isLoadingP,
  title,
}) {
  const [selectedUser, setSelectedUser] = useState()
  return (
    <UserTable
      isLoading={isLoading}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      customers={customers}
      isLoadingP={isLoadingP}
      showMore={showMore}
      data={data}
      setData={setData}
      pagination={pagination}
    />
  )
}

function UserTable({
  data,
  setData,
  customers,
  showMore,
  pagination,
  isLoading,
  isLoadingP,
}) {
  const [openModal, setOpenModal] = useState(false)
  const [selectUser, setSlectUser] = useState(false)

  return isLoading ? (
    <OrderSkleton />
  ) : (
    <div className="">
      <DesableConfirmModal
        title="Suspendre le Compte"
        confirmFunction={async () => {
          // deleteCategory(selectedCategory.id, selectedCategory.imageUrl)
          setOpenModal(false)
        }}
        open={openModal}
        setOpen={setOpenModal}
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
                  placeholder="Rechercher un utilisateur..."
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-sm">
              <table className="min-w-full table-auto divide-y divide-gray-300 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    {columnsUser.map((column, index) => (
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
                  {customers?.map((row, index) => (
                    <tr key={index}>
                      {columnsUser.map((column, index) => {
                        const cell = row[column.accessor]
                        const element = column.Cell?.(cell, row['id']) ?? cell
                        return <td key={index}>{element}</td>
                      })}
                      <td className="relative flex space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => {
                            setSlectUser(row)
                            setOpenModal(true)
                          }}
                        >
                          {row.active ? (
                            <p className=" text-gray-500 ">Desactiver </p>
                          ) : (
                            <p className="  text-gray-500 ">Activer</p>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="mt-5">{customers?.length + ' Utilisateurs'}</p>
              {pagination && customers.length > 0 && (
                <PaginationButton getmoreData={showMore} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersList

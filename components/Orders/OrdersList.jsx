import React, { useState } from 'react'
import { columnsOrder } from './_dataTable'

import { RiFileCopy2Line, RiSearchLine } from 'react-icons/ri'

import OrderDetailsDrawer from './OrderDetailsDrawer'
import { orders } from '../../_data'
import OrdersStats from './OrdersStats'
import MenuPopover from '../MenuPopover'

const sortOptions = [
  { name: 'En cours de livraison', href: '#', current: true },
  { name: 'Livrés', href: '#', current: false },
  { name: 'Annulés', href: '#', current: false },
  { name: 'En attente de confirmation', href: '#', current: false },
  { name: 'En preparation', href: '#', current: false },
]

const periods = [
  { name: 'Jour', href: '#', current: true },
  { name: 'Semaine', href: '#', current: false },
  { name: 'Mois', href: '#', current: false },
  { name: 'Anneé', href: '#', current: false },
]

function OrdersList() {
  const [selectedOrder, setSelectedOrder] = useState(null)

  return (
    <OrdersTable
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      orders={orders}
    />
  )
}

function OrdersTable({ selectedOrder, setSelectedOrder, orders }) {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <div className="">
      <OrderDetailsDrawer
        order={selectedOrder}
        open={openDrawer}
        setOpen={setOpenDrawer}
      />
      <div className="mb-8 sm:flex sm:items-center">
        <div className="flex-auto space-y-2 lg:flex">
          <div className="flex items-center flex-1 ">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <RiSearchLine
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-sm focus:border-primary-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                  placeholder="Rechercher une commande"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4 ">
            <div className="p-2 bg-gray-900 rounded-sm hover:bg-gray-700">
              <MenuPopover options={sortOptions} label={'Avancement'} />
            </div>
            <div className="p-2 bg-gray-900 rounded-sm hover:bg-gray-700">
              <MenuPopover options={periods} label={'Periode'} />
            </div>
          </div>
        </div>
      </div>
      <OrdersStats />
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-sm">
              <table className="min-w-full text-left divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    {columnsOrder.map((column, index) => (
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
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders?.map((row, index) => (
                    <tr key={index}>
                      {columnsOrder.map((column, index) => {
                        const cell = row[column.accessor]
                        const element = column.Cell?.(cell) ?? cell
                        return <td key={index}>{element}</td>
                      })}
                      <td className="relative flex py-4 pl-3 pr-4 space-x-2 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                        <button
                          onClick={() => {
                            setSelectedOrder(row)
                            setOpenDrawer(true)
                          }}
                          type="button"
                          className="inline-flex items-center p-3 bg-gray-200 border border-transparent rounded-full shadow-sm text-black-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <RiFileCopy2Line
                            className="w-4 h-4"
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
        </div>
      </div>
    </div>
  )
}

export default OrdersList

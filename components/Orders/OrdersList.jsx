import React, { Fragment, useState } from 'react'
import { columnsOrder } from './_dataTable'

import { RiArrowDownSLine, RiFileCopy2Line, RiSearchLine } from 'react-icons/ri'

import OrderDetailsDrawer from './OrderDetailsDrawer'
import { orders } from '../../_data'
import OrdersStats from './OrdersStats'
import { Menu, Transition } from '@headlessui/react'

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
            <Menu
              as="div"
              className="relative inline-block p-2 text-left rounded-sm bg-gray-50 hover:bg-gray-100"
            >
              <div>
                <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900 focus:outline-none ">
                  Avancement
                  <RiArrowDownSLine
                    className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-left bg-white shadow-2xl rounded-xs ring-1 ring-black ring-opacity-5 focus:outline-none md:origin-top-right">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? 'font-medium text-gray-900'
                                : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu
              as="div"
              className="relative inline-block p-2 text-left rounded-sm bg-gray-50 hover:bg-gray-100"
            >
              <div>
                <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900 focus:outline-none ">
                  Periode
                  <RiArrowDownSLine
                    className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-32 mt-2 origin-top-left bg-white shadow-2xl rounded-xs ring-1 ring-black ring-opacity-5 focus:outline-none md:origin-top-right">
                  <div className="py-1">
                    {periods.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? 'font-medium text-gray-900'
                                : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
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

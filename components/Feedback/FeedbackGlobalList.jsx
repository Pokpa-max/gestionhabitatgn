import React, { useState } from 'react'
import { columnsFeedbackGlobal } from './_dataTable'

import { RiSearchLine, RiDeleteBinFill, RiMessageLine } from 'react-icons/ri'
import { reviews } from '../../_data'
import FeedbackDetailsModal from './FeedbackDetailsModal'

function FeedbackGlobalList() {
  return <FeedbackTable />
}

function FeedbackTable() {
  const [open, setOpen] = useState(false)
  const [feedback, setFeedback] = useState(reviews[0])
  return (
    <div className="w-full space-y-5 py-10">
      <FeedbackDetailsModal open={open} setOpen={setOpen} feedback={feedback} />
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
                  className="block w-full border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-primary-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                  placeholder="Rechercher un feedback"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 ">
              <table className="min-w-full table-auto divide-y divide-gray-300 text-left ">
                <thead className="bg-gray-50">
                  <tr className="">
                    {columnsFeedbackGlobal.map((column, index) => (
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
                  {reviews?.map((row, index) => (
                    <tr key={index} className="">
                      {columnsFeedbackGlobal.map((column, index) => {
                        const cell = row[column.accessor]
                        const element = column.Cell?.(cell) ?? cell
                        return (
                          <td className="" key={index}>
                            {element}
                          </td>
                        )
                      })}
                      <td className="relative flex items-center justify-center space-x-2 whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          type="button"
                          className="text-black-900 inline-flex items-center rounded-full border border-transparent bg-gray-200 p-3 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <RiMessageLine
                            className="h-4 w-4"
                            aria-hidden="true"
                            onClick={() => {
                              setFeedback(row)
                              setOpen(true)
                            }}
                          />
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full border border-transparent bg-red-500 p-3 text-white shadow-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <RiDeleteBinFill
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
        </div>
      </div>
    </div>
  )
}

export default FeedbackGlobalList

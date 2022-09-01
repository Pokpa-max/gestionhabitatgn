import React, { useEffect, useState } from 'react'
import { columnsCategory } from './_dataTable'

import { RiDeleteRow, RiFileCopy2Line, RiSearchLine } from 'react-icons/ri'
import CategoryFormDrawer from './CategoryFormDrawer'
import { getCategories, deleteCategory } from '@/lib/services/settings'
import ConfirmModal from '../../ConfirmModal'

function CategoriesList() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const unsubscribe = getCategories(setCategories)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <CategoriesTable
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      categories={categories}
    />
  )
}

function CategoriesTable({
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openWarning, setOpenWarning] = useState(false)

  return (
    <div className="">
      <ConfirmModal
        confirmFunction={async () => {
          deleteCategory(selectedCategory.id, selectedCategory.imageUrl)
          setOpenWarning(false)
        }}
        cancelFuction={() => {}}
        title="Suppression Category"
        description={
          "Etes vous sur de supprimer cette categorie ? L'action est irreversible"
        }
        open={openWarning}
        setOpen={setOpenWarning}
      />
      <CategoryFormDrawer
        category={selectedCategory}
        open={openDrawer}
        setOpen={setOpenDrawer}
      />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
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
                  placeholder="Rechercher un Category"
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
              setSelectedCategory(null)
            }}
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-sm hover:bg-primary-700 bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
          >
            Ajouter une categorie
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-sm">
              <table className="min-w-full text-left divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    {columnsCategory.map((column, index) => (
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
                  {categories?.map((row, index) => (
                    <tr key={index}>
                      {columnsCategory.map((column, index) => {
                        const cell = row[column.accessor]
                        const element = column.Cell?.(cell) ?? cell
                        return <td key={index}>{element}</td>
                      })}
                      <td className="relative flex py-4 pl-3 pr-4 space-x-2 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                        <button
                          onClick={() => {
                            setSelectedCategory(row)
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
                        <button
                          onClick={() => {
                            setSelectedCategory(row)
                            setOpenWarning(true)
                          }}
                          type="button"
                          className="inline-flex items-center p-3 text-white bg-red-500 border border-transparent rounded-full shadow-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <RiDeleteRow className="w-4 h-4" aria-hidden="true" />
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

export default CategoriesList

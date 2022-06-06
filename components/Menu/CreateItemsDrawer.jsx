import React from 'react'
import { RiImage2Fill } from 'react-icons/ri'
import { categoriesOptions } from '../../_data'
import Drawer from '../Drawer'
import SimpleSelect from '../SimpleSelect'

function CreateItemsDrawer({ open, setOpen }) {
  return (
    <Drawer
      open={open}
      setOpen={setOpen}
      title={'Ajouter une categorie'}
      description={
        ' Creer les sections de votre menu pour organiser les articles que vous proposez.'
      }
    >
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="group col-span-3 sm:col-span-2">
                <label
                  for="item-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nom de l'element
                </label>
                <div class="mt-1 flex rounded-sm">
                  <input
                    type="text"
                    name="item-name"
                    id="item-name"
                    class="block w-full flex-1 rounded-sm border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Dejeuner"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                for="item-note"
                class="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div class="mt-1">
                <textarea
                  id="item-description"
                  name="item-description"
                  rows="3"
                  class="mt-1 block w-full rounded-sm border border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="note de categorie"
                ></textarea>
              </div>
              <p class="mt-2 text-xs text-gray-500">
                *Breve note sur votre categorie
              </p>
            </div>
            <div>
              <label
                for="item-note"
                class="block text-sm font-medium text-gray-700"
              >
                Categorie(s) de l'element
              </label>
              <div class="mt-1">
                <SimpleSelect
                  options={categoriesOptions}
                  isMulti
                  placeholder="Selectionner les categorie(s)"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Image de l'article
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex justify-center max-w-lg px-2 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xs">
                  <div className="space-y-1 text-center">
                    <RiImage2Fill className="w-12 h-12 mx-auto text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative font-medium bg-white rounded-sm cursor-pointer text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
                      >
                        <span>Charger image</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Prix
              </label>
              <div className="relative mt-1 rounded-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 mr-5 pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">GNF</span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full pl-12 pr-20 border-gray-300 rounded-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default CreateItemsDrawer

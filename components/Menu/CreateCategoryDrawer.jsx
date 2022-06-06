import React from 'react'
import { menuOptions } from '../../_data'
import Drawer from '../Drawer'
import SimpleSelect from '../SimpleSelect'

function CreateCategoryDrawer({ open, setOpen }) {
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
                  for="category-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nom de la section
                </label>
                <div class="mt-1 flex rounded-sm">
                  <input
                    type="text"
                    name="category-name"
                    id="category-name"
                    class="block w-full flex-1 rounded-sm border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Dejeuner"
                  />
                </div>
                <p class=" mt-2 flex text-xs text-gray-500">
                  *N'hesitez pas a rajouter un emoji
                  <div className="w-5 h-5 group-focus-within:animate-bounce">
                    <span className="ml-2">🍔</span>
                  </div>
                </p>
              </div>
            </div>

            <div>
              <label
                for="category-note"
                class="block text-sm font-medium text-gray-700"
              >
                Ajouter une note
              </label>
              <div class="mt-1">
                <textarea
                  id="category-no"
                  name="category-no"
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
                for="category-note"
                class="block text-sm font-medium text-gray-700"
              >
                Menu(s) de la categorie
              </label>
              <div class="mt-1">
                <SimpleSelect
                  options={menuOptions}
                  isMulti
                  placeholder="Selectionner les menu(s)"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default CreateCategoryDrawer

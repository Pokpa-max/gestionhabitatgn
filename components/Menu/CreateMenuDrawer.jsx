import React from 'react'
import Drawer from '../Drawer'

function CreateMenuDrawer({ open, setOpen }) {
  return (
    <Drawer
      open={open}
      setOpen={setOpen}
      title={'Ajouter un menu'}
      description={
        'Creer un menu que vous pourre personnaliser et selectionner en foction de votre besoin et activer comme menu principale.'
      }
    >
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="menu-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Nom du menu
                </label>
                <div class="mt-1 flex rounded-sm">
                  <input
                    type="text"
                    name="menu-name"
                    id="menu-name"
                    class="block w-full flex-1 rounded-sm border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Menu WeekEnd"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                for="menu-description"
                class="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div class="mt-1">
                <textarea
                  id="menu-description"
                  name="menu-description"
                  rows="3"
                  class="mt-1 block w-full rounded-sm border border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Description du menu"
                ></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                *Breve description de votre menu
              </p>
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default CreateMenuDrawer

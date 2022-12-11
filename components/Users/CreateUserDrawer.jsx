import React from 'react'
import { useState } from 'react'
import DrawerForm from '../DrawerForm'

export default function CreateUserDrawer({ open, setOpen }) {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <DrawerForm
        open={open}
        setOpen={setOpen}
        title={'Ajouter un Manager'}
        description={'Creation de compte manager'}
        // onSubmit={handleSubmit(onSubmit)}
        // loading={loading}
        footerButtons={
          <>
            {loading ? (
              <div className="ml-4 inline-flex w-[22.5rem] justify-center border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2">
                <Loader />
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="ml-4 inline-flex justify-center border border-transparent bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Enregistrer
                </button>
              </>
            )}
          </>
        }
      >
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="subtitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <div className="mt-1 ">
                  <input
                    type="text"
                    id="slogan"
                    className="block w-full flex-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Petit slogan"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600"></p>
                </div>
              </div>
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="subtitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prenom
                </label>
                <div className="mt-1 ">
                  <input
                    type="text"
                    id="slogan"
                    className="block w-full flex-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Petit slogan"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerForm>
    </>
  )
}

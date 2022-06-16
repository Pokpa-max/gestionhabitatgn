import React from 'react'
import { RiImage2Fill } from 'react-icons/ri'
import { categoriesOptions } from '../../_data'
import Drawer from '../Drawer'
import GoogleMaps from '../GoogleMaps'
import SimpleSelect from '../SimpleSelect'
import Toggle from '../Toggle'

function RestaurantFormDrawer({ open, setOpen }) {
  return (
    <Drawer
      open={open}
      setOpen={setOpen}
      title={'Informations restaurants'}
      description={
        'Modifiez ou finalisez l inscription d un établissement en fournissant les informations du formulaire suivant.'
      }
      footerButtons={
        <>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setOpen(false)}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Enregistrer
          </button>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent bg-primary-accent hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Creer un compte
          </button>
        </>
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
                  Nom de l'etablissement
                </label>
                <div class="mt-1 flex">
                  <input
                    type="text"
                    name="item-name"
                    id="item-name"
                    class="block w-full flex-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Nom du restaurant"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-primary-accent">Gestionnaire</h1>

            <div className="grid grid-cols-6 gap-6 pt-3 border-t">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="votre nom"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prenom
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="votre prenom"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telephone
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 mr-5 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">+224</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block w-full pl-12 pr-20 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Votre numero de telephone"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  autoComplete="family-name"
                  placeholder="Le poste occupé"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            <h1 className="text-primary-accent">Adresse</h1>
            <div className="grid grid-cols-9 gap-6 pt-3 border-t">
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="zone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Commune
                </label>

                <div class="mt-1">
                  <SimpleSelect
                    options={[]}
                    isMulti
                    placeholder="Selectionner la commune"
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="quartier"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quartier
                </label>

                <div class="mt-1">
                  <SimpleSelect
                    options={[]}
                    isMulti
                    placeholder="Selectionner le quartier"
                  />
                </div>
              </div>

              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Indications
                </label>
                <input
                  type="text"
                  name="indications"
                  id="indications"
                  autoComplete="street"
                  placeholder="Plus de precision"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div className="col-span-12 sm:col-span-3">
                <div className="py-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Longitude
                  </label>
                  <input
                    type="text"
                    name="indications"
                    id="indications"
                    autoComplete="street"
                    placeholder="Coordonnée long"
                    className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div className="py-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Latitude
                  </label>
                  <input
                    type="text"
                    name="indications"
                    id="indications"
                    autoComplete="street"
                    placeholder="Coordonnée lat"
                    className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div className="py-2">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white border border-gray-300 bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    Rechercher
                  </button>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 ">
                <GoogleMaps />
              </div>
            </div>

            <h1 className="text-primary-accent">Information entreprise</h1>
            <div className="grid grid-cols-9 gap-6 pt-3 border-t">
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="rccm"
                  className="block text-sm font-medium text-gray-700"
                >
                  RCCM
                </label>

                <input
                  type="text"
                  name="rccm"
                  id="rccm"
                  placeholder="Numero de registre"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="nif"
                  className="block text-sm font-medium text-gray-700"
                >
                  NIF
                </label>

                <input
                  type="text"
                  name="nif"
                  id="nif"
                  placeholder="votre NIF"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>

              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="otherAcc"
                  className="block text-sm font-medium text-gray-700"
                >
                  Autre accreditations
                </label>
                <input
                  type="text"
                  name="otherAcc"
                  id="otherAcc"
                  placeholder="Reference"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email du compte a creer
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@madifood.com"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            <div className="p-2 px-4 bg-red-200">
              <Toggle />
            </div>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default RestaurantFormDrawer

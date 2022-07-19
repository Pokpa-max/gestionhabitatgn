import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { createAccount, editRestaurant } from '../../lib/services/restaurant'
import { autoFillRestaurantForm } from '../../utils/functionFactory'
import { notify } from '../../utils/toast'
import { quartier, zones } from '../../_data'
import ConfirmModal from '../ConfirmModal'

import DrawerForm from '../DrawerForm'
import GoogleMaps from '../GoogleMaps'
import Loader from '../Loader'
import SimpleSelect from '../SimpleSelect'
import Toggle from '../Toggle'

function RestaurantFormDrawer({ restaurant, open, setOpen }) {
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  })

  useEffect(() => {
    const setFormvalue = () => {
      autoFillRestaurantForm(reset, setValue, restaurant)
    }
    setFormvalue()
  }, [restaurant])

  console.log('restaurant')

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      if (restaurant) await editRestaurant(restaurant.id, data)
      setOpen(false)
      notify('Votre requète s est executée avec succès', 'success')
    } catch (error) {
      console.log(error)
      notify('Une erreur est survenue', 'error')
    }
    setLoading(false)
  }

  const CreatedAccountSubmit = async (data) => {
    setLoading(true)
    try {
      await createAccount(restaurant.id, data)
      setOpen(false)
      notify('le compte à été crée avec succès', 'success')
    } catch (error) {
      console.log(error)
      notify('Une erreur est survenue', 'error')
    }
    setLoading(false)
  }

  const values = watch()

  return (
    <>
      <DrawerForm
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit(onSubmit)}
        title={'Informations restaurants'}
        description={
          'Modifiez ou finalisez l inscription d un établissement en fournissant les informations du formulaire suivant.'
        }
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
                  disabled={restaurant?.accountCreated}
                  type="button"
                  onClick={handleSubmit(CreatedAccountSubmit)}
                  className="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent bg-primary-accent hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Creer un compte
                </button>
              </>
            )}
          </>
        }
      >
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 group sm:col-span-2">
                <label
                  htmlFor="storename"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom de l'etablissement
                </label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    {...register('storename', {
                      required: 'Champs requis',
                    })}
                    id="storename"
                    className="flex-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Nom du restaurant"
                  />
                  <p className="pt-1 text-xs text-red-600 font-stratos-light">
                    {errors?.storename?.message}
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-primary-accent">Gestionnaire</h1>

            <div className="grid grid-cols-6 gap-6 pt-3 border-t">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  {...register('firstname', {
                    required: 'Champs requis',
                  })}
                  id="firstname"
                  autoComplete="given-name"
                  placeholder="votre nom"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.firstname?.message}
                </p>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prenom
                </label>
                <input
                  type="text"
                  {...register('lastname', {
                    required: 'Champs requis',
                  })}
                  id="lastname"
                  autoComplete="family-name"
                  placeholder="votre prenom"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.lastname?.message}
                </p>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phoneNumber"
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
                    {...register('phoneNumber', {
                      required: 'Champs requis',
                      pattern:
                        /^(\+\d{3}\s?)?\(?\d{3}\)?[\s-]*\d{2}[\s-]*\d{2}[\s-]*\d{2}$/i,
                    })}
                    id="phoneNumber"
                    className="block w-full pl-12 pr-20 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Votre numero de telephone"
                  />
                  <p className="pt-1 text-xs text-red-600 font-stratos-light">
                    {errors?.phoneNumber?.type === 'pattern'
                      ? 'Entrez un numero valide'
                      : errors?.phoneNumber?.message}
                  </p>
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
                  {...register('position', {
                    required: 'Champs requis',
                  })}
                  id="position"
                  autoComplete="family-name"
                  placeholder="Le poste occupé"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.position?.message}
                </p>
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

                <div className="mt-1">
                  <SimpleSelect
                    required={'Champs requis'}
                    name="zone"
                    control={control}
                    options={zones}
                    placeholder="Selectionner la commune"
                  />
                </div>
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.zone?.message}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="quartier"
                  className="block text-sm font-medium text-gray-700"
                >
                  Quartier
                </label>

                <div className="mt-1">
                  <SimpleSelect
                    required={'Champs requis'}
                    name="quartier"
                    control={control}
                    options={quartier}
                    placeholder="Selectionner le quartier"
                  />
                </div>
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.quartier?.message}
                </p>
              </div>

              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="indication"
                  className="block text-sm font-medium text-gray-700"
                >
                  Indications
                </label>
                <input
                  type="text"
                  {...register('indication', {
                    required: 'Champs requis',
                  })}
                  id="indication"
                  autoComplete="street"
                  placeholder="Plus de precision"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.indication?.message}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <div className="py-2">
                  <label
                    htmlFor="long"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Longitude
                  </label>
                  <input
                    type="text"
                    {...register('long')}
                    id="long"
                    placeholder="Coordonnée long"
                    className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div className="py-2">
                  <label
                    htmlFor="lat"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Latitude
                  </label>
                  <input
                    type="text"
                    {...register('lat')}
                    id="lat"
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
                  {...register('rccm')}
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
                  {...register('nif')}
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
                  {...register('otherAcc')}
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
                  {...register('email', {
                    required: 'Champs requis',
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  id="email"
                  placeholder="email@madifood.com"
                  className="block w-full mt-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.email?.type === 'pattern'
                    ? 'Entrez un email valide'
                    : errors?.email?.message}
                </p>
              </div>
            </div>

            <div className="p-2 px-4 bg-red-200">
              <Toggle
                setToggleValue={setValue}
                control={control}
                name={'isActive'}
              />
            </div>
          </div>
        </div>
      </DrawerForm>
    </>
  )
}

export default RestaurantFormDrawer

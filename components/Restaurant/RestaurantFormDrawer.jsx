import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  addRestaurant,
  createAccount,
  editRestaurant,
} from '../../lib/services/restaurant'
import { autoFillRestaurantForm } from '../../utils/functionFactory'
import { notify } from '../../utils/toast'
import { quartier, zones } from '../../_data'

import DrawerForm from '../DrawerForm'
import GoogleMaps from '../GoogleMaps'
import Loader from '../Loader'
import SimpleSelect from '../SimpleSelect'
import Toggle from '../Toggle'

function RestaurantFormDrawer({ restaurant, open, setOpen, setData, data }) {
  const [loading, setLoading] = useState(false)
  data = data || {}
  const { restaurants, lastElement } = data
  console.log('voir doneee', data)

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldUnregister: false,
  })

  const setLonLat = (lon, lat) => {
    setValue('long', lon)
    setValue('lat', lat)
  }

  useEffect(() => {
    const setFormvalue = () => {
      autoFillRestaurantForm(reset, setValue, restaurant)
    }
    setFormvalue()
  }, [restaurant])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      console.log('Modification successful!')
      if (restaurant) {
        await editRestaurant(restaurant.id, data)
        const update = (data) => {
          const restaurantCopy = JSON.parse(JSON.stringify(restaurants))
          const newRestaurants = restaurantCopy.map((res) => {
            console.log('before update: ', data)

            if (restaurant.id === res.id) {
              console.log('before update2222222: ', restaurant.id, res.id)

              return {
                ...res,
                ...data,
              }
            }
            return res
          })

          console.log('voir newRestaurants', newRestaurants)

          setData({ restaurants: newRestaurants, lastElement })
        }

        update(data)
      } else {
        const {} = await addRestaurant({
          ...data,
          isActive: false,
          isAccountCreated: false,
        })

        console.log('ajout dun response!')
        setOpen(false)
        notify('Votre requète s est executée avec succès', 'success')
      }
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
      // setOpen(false)
      notify('le compte à été crée avec succès', 'success')
    } catch (error) {
      console.log(error)
      notify('Une erreur est survenue', 'error')
    }
    setLoading(false)
  }

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
                  className="border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="ml-4 inline-flex justify-center border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Enregistrer
                </button>
                <button
                  disabled={restaurant?.isAccountCreated || !restaurant}
                  type="button"
                  onClick={handleSubmit(CreatedAccountSubmit)}
                  className="ml-4 inline-flex justify-center border border-transparent bg-primary-accent px-4 py-2 text-sm font-medium text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Creer un compte
                </button>
              </>
            )}
          </>
        }
      >
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="group col-span-3 sm:col-span-2">
                <label
                  htmlFor="storename"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom de l'etablissement
                </label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    {...register('storename', {
                      required: 'Champs requis',
                    })}
                    id="storename"
                    className="block w-full flex-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Nom du restaurant"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600">
                    {errors?.storename?.message}
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-primary-accent">Gestionnaire</h1>

            <div className="grid grid-cols-6 gap-6 border-t pt-3">
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
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
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
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
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
                  <div className="pointer-events-none absolute inset-y-0 left-0 mr-5 flex items-center pl-3">
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
                    className="block w-full border-gray-300 pl-12 pr-20 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Votre numero de telephone"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600">
                    {errors?.phoneNumber?.type === 'pattern'
                      ? 'Entrez un numero valide'
                      : errors?.phoneNumber?.message}
                  </p>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Champs requis',
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  id="email"
                  placeholder="email@madifood.com"
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.email?.type === 'pattern'
                    ? 'Entrez un email valide'
                    : errors?.email?.message}
                </p>
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
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.position?.message}
                </p>
              </div>
            </div>

            <h1 className="text-primary-accent">Adresse</h1>
            <div className="grid grid-cols-9 gap-6 border-t pt-3">
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
                <p className="pt-1 font-stratos-light text-xs text-red-600">
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
                <p className="pt-1 font-stratos-light text-xs text-red-600">
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
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
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
                    disabled
                    type="text"
                    {...register('long')}
                    id="long"
                    placeholder="Coordonnée long"
                    className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
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
                    disabled
                    type="text"
                    {...register('lat')}
                    id="lat"
                    placeholder="Coordonnée lat"
                    className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 ">
                <GoogleMaps
                  lat={restaurant?.adress.lat}
                  lng={restaurant?.adress.long}
                  setLonLat={setLonLat}
                />
              </div>
            </div>

            <h1 className="text-primary-accent">Information entreprise</h1>
            <div className="grid grid-cols-9 gap-6 border-t pt-3">
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
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
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
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
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
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
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
                  // disabled={restaurant?.isAccountCreated || !restaurant}
                  type="email"
                  {...register('restaurantEmail', {
                    required: 'Champs requis',
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  id="restaurantEmail"
                  placeholder="email@madifood.com"
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.restaurantEmail?.type === 'pattern'
                    ? 'Entrez un email valide'
                    : errors?.restaurantEmail?.message}
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telephone du restaurant
                </label>
                <div className="relative mt-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 mr-5 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">+224</span>
                  </div>
                  <input
                    type="tel"
                    {...register('restaurantPhoneNumber', {
                      required: 'Champs requis',
                      pattern:
                        /^(\+\d{3}\s?)?\(?\d{3}\)?[\s-]*\d{2}[\s-]*\d{2}[\s-]*\d{2}$/i,
                    })}
                    id="restaurantPhoneNumber"
                    className="block w-full border-gray-300 pl-12 pr-20 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Votre numero de telephone"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600">
                    {errors?.restaurantPhoneNumber?.type === 'pattern'
                      ? 'Entrez un numero valide'
                      : errors?.restaurantPhoneNumber?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-200 p-2 px-4">
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

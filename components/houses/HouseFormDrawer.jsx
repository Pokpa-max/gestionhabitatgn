import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import { useForm } from 'react-hook-form'
import {
  addHouses,
  addRestaurant,
  createAccount,
  editRestaurant,
} from '../../lib/services/restaurant'
import { autoFillRestaurantForm } from '../../utils/functionFactory'
import { notify } from '../../utils/toast'
import { quartier, zones, houseType, offerType, commodites } from '../../_data'

import DrawerForm from '../DrawerForm'
import GoogleMaps from '../GoogleMaps'
import Loader from '../Loader'
import SimpleSelect from '../SimpleSelect'
import Toggle from '../Toggle'

function HouseFormDrawer({ restaurant, open, setOpen }) {
  const [loading, setLoading] = useState(false)
  const [selectedImage, setselectedImage] = useState([])
  const [selectInsideImages, setInsideImages] = useState([])

  const Hotels = [
    { value: 1, label: 'Coral Beach Maldives' },
    { value: 2, label: 'Ilaa Beach Maldives' },
    { value: 3, label: 'Finolhu' },
    { value: 4, label: 'Arena' },
    { value: 5, label: 'Kaani Beach Hotel' },
  ]

  const [selectedOptions, setSelectedOptions] = useState(null)

  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : [])
  }

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
    shouldUnregister: false,
  })

  const setLonLat = (lon, lat) => {
    setValue('long', lon)
    setValue('lat', lat)
  }
  const formData = watch()
  const formDataInsid = watch()

  useEffect(() => {
    const setFormvalue = () => {
      autoFillRestaurantForm(reset, setValue, restaurant)
    }
    setFormvalue()
  }, [restaurant])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      console.log('voir donnees👌👌👌👌👌👌', data)
      // if (restaurant) await editRestaurant(restaurant.id, data)
      // else
      await addHouses({
        ...data,
        // isAvailable: false,
        // isActive: false,
        // isAccountCreated: false,
      })
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
      // setOpen(false)
      notify('le compte à été crée avec succès', 'success')
    } catch (error) {
      console.log(error)
      notify('Une erreur est survenue', 'error')
    }
    setLoading(false)
  }

  console.log('voir contenu  des  images ', selectedOptions)

  return (
    <>
      <DrawerForm
        open={open}
        setOpen={setOpen}
        onSubmit={handleSubmit(onSubmit)}
        title={'Informations logement'}
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
            <h1 className="text-primary-accent">Information</h1>

            <div className="grid grid-cols-6 gap-6 border-t pt-3">
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="type de logement"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type de Logement
                </label>

                <div className="mt-1">
                  <SimpleSelect
                    required={'Champs requis'}
                    name="houseType"
                    control={control}
                    options={houseType}
                    placeholder="Selectionner le type de logement"
                  />
                </div>
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.houseType?.message}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <div className="mt-1">
                  <Toggle
                    setToggleValue={setValue}
                    control={control}
                    name={'isAvailable'}
                  />
                </div>
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.quartier?.message}
                </p>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="quartier"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type d'offre
                </label>

                <div className="mt-1">
                  <SimpleSelect
                    required={'Champs requis'}
                    name="offerType"
                    control={control}
                    options={offerType}
                    placeholder="Selectionner le type doffre"
                  />
                </div>
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.offerType?.message}
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
                  for="exampleFormControlTextarea1"
                  class="form-label mb-2 inline-block text-gray-700"
                >
                  Description du logement
                </label>
                <textarea
                  type="text"
                  {...register('description', {
                    required: 'Champs requis',
                  })}
                  id="description"
                  autoComplete="street"
                  placeholder="la description ici"
                  class="
        form-control
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
                  rows="3"
                ></textarea>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prix
                </label>
                <input
                  type="number"
                  {...register('price', {
                    required: 'Champs requis',
                  })}
                  id="price"
                  autoComplete="family-name"
                  placeholder="le prix mensuel"
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.price?.message}
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Avance du loyer
                </label>
                <input
                  type="number"
                  {...register('adVance', {
                    required: 'Champs requis',
                  })}
                  id="adVance"
                  autoComplete="family-name"
                  placeholder="nombre de mois"
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.adVance?.message}
                </p>
              </div>

              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="commodite"
                  className="block text-sm font-medium text-gray-700"
                >
                  Commodité
                </label>

                <div className="mt-1">
                  <SimpleSelect
                    required={'Champs requis'}
                    name="commodite"
                    control={control}
                    options={commodites}
                    placeholder="Selectionner le commodite"
                  />
                </div>
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.commodite?.message}
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre de piece
                </label>
                <input
                  type="number"
                  {...register('partNumber', {
                    required: 'Champs requis',
                  })}
                  id="partNumber"
                  autoComplete="family-name"
                  placeholder="Le nombre de chambres"
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.partNumber?.message}
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="surface"
                  className="block text-sm font-medium text-gray-700"
                >
                  Surface
                </label>
                <input
                  type="text"
                  {...register('surface', {
                    required: 'Champs requis',
                  })}
                  id="surface"
                  autoComplete="family-name"
                  placeholder="la surface en m²"
                  className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                />
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.surface?.message}
                </p>
              </div>
            </div>

            <h1 className="text-primary-accent">Adresse du logement</h1>
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

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    {...register('section', {
                      required: 'Champs requis',
                    })}
                    id="section"
                    autoComplete="family-name"
                    placeholder="le quartier"
                    className="mt-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600">
                    {errors?.section?.message}
                  </p>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-3"></div>
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

            <h1 className="text-primary-accent">Selection Dimages</h1>

            <div className="grid grid-cols-9 gap-24 border-t pt-3">
              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="rccm"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image vitrine du logement
                </label>

                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="rounded-xs flex max-w-lg justify-center border-2 border-dashed border-gray-300 px-2 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      {formData?.imageUrl?.length > 0 ? (
                        <img
                          src={URL.createObjectURL(formData?.imageUrl[0])}
                          alt="preview"
                        />
                      ) : selectedImage ? (
                        <img src={selectedImage.imageUrl1000} alt="preview" />
                      ) : (
                        <RiImage2Fill className="mx-auto h-12 w-12 text-gray-400" />
                      )}
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-sm bg-white font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
                        >
                          <span>Charger image</span>
                          <input
                            id="file-upload"
                            {...register('imageUrl', {
                              required:
                                formData?.imageUrl?.length == 0 &&
                                !selectedImage?.imageUrl,
                            })}
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
                    <p className="pt-1 font-stratos-light text-xs text-red-600">
                      {errors?.imageUrl && 'veuillez selectionnez une image'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 sm:col-span-3">
                <label
                  htmlFor="rccm"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image interieurs
                </label>

                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="rounded-xs flex max-w-lg justify-center border-2 border-dashed border-gray-300 px-2 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      {formDataInsid?.imageInsidUrl?.length > 0 ? (
                        <img
                          src={URL.createObjectURL(
                            formDataInsid?.imageInsidUrl[0]
                          )}
                          alt="preview"
                        />
                      ) : selectInsideImages ? (
                        <img
                          src={selectInsideImages.imageUrl1000}
                          alt="preview"
                        />
                      ) : (
                        <RiImage2Fill className="mx-auto h-12 w-12 text-gray-400" />
                      )}
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload2"
                          className="relative cursor-pointer rounded-sm bg-white font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
                        >
                          <span>Charger image</span>
                          <input
                            id="file-upload2"
                            {...register('imageInsidUrl', {
                              required:
                                formDataInsid?.imageInsidUrl?.length == 0 &&
                                !selectInsideImages?.imageInsidUrl,
                            })}
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
                    <p className="pt-1 font-stratos-light text-xs text-red-600">
                      {errors?.imageInsidUrl &&
                        'veuillez selectionnez les images interieurs'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="container mx-auto py-8">
                <h1 className="text-sm">Images interieurs</h1>
                <div className="flex flex-wrap items-center justify-center lg:justify-between">
                  <div className=" px-2	">
                    <Select options={Hotels} onChange={setHandle} isMulti />
                  </div>
                  <div>{selectedOptions}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerForm>
    </>
  )
}

export default HouseFormDrawer

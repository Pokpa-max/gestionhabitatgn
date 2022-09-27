import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { notify } from '../../utils/toast'
import { restaurantsOptions, sponsorTypes } from '../../_data'
import { addSponsor, editSponsor } from '../../lib/services/marketing'
import DrawerForm from '../DrawerForm'
import Loader from '../Loader'
import SimpleSelect from '../SimpleSelect'
import Toggle from '../Toggle'
import { autoFillSponsorForm } from '../../utils/functionFactory'
import RestaurantSelect, { collectionFormatData } from '../restaurantSelect'

function SponsorFormDrawer({ sponsor, open, setOpen }) {
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
    shouldUnregister: false,
  })

  const formData = watch()

  useEffect(() => {
    const setFormvalue = () => {
      autoFillSponsorForm(reset, setValue, sponsor)
    }
    setFormvalue()
  }, [sponsor])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      if (sponsor) await editSponsor(sponsor.id, data)
      else await addSponsor(data)
      setOpen(false)
      notify('Votre requète s est executée avec succès', 'success')
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
        title={'Ajouter un Sponsor'}
        description={"Formulaire de sponsoring d'un restaurant"}
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
                  htmlFor="restaurant"
                  className="block text-sm font-medium text-gray-700"
                >
                  Restaurant
                </label>

                <div className="mt-1">
                  <RestaurantSelect
                    required={'Champs requis'}
                    control={control}
                    formatData={collectionFormatData}
                  />
                </div>
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.restaurant?.message}
                </p>
              </div>
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type de Sponsor
                </label>

                <div className="mt-1">
                  <SimpleSelect
                    required={'Champs requis'}
                    name="type"
                    control={control}
                    options={sponsorTypes}
                    placeholder="Selectionner le type"
                  />
                </div>
                <p className="pt-1 font-stratos-light text-xs text-red-600">
                  {errors?.type?.message}
                </p>
              </div>
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Debut sponsoring
                </label>
                <div className="mt-1 ">
                  <input
                    type="date"
                    {...register('startDate', {
                      required: 'Champs requis',
                      validate: (value) => formData?.endDate > value,
                    })}
                    id="startDate"
                    className="block w-full flex-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600">
                    {errors?.startDate?.type === 'validate'
                      ? 'Selectionner une date de debut < a la date de fin'
                      : errors?.startDate?.message}
                  </p>
                </div>
              </div>
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fin sponsoring
                </label>
                <div className="mt-1 ">
                  <input
                    type="date"
                    {...register('endDate', {
                      required: 'Champs requis',
                      validate: (value) => formData?.startDate < value,
                    })}
                    id="endDate"
                    className="block w-full flex-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600">
                    {errors?.endDate?.type === 'validate'
                      ? 'Selectionner une date de fin > a la date de debut'
                      : errors?.endDate?.message}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`p-2 px-4 ${
                formData?.isActive ? 'bg-green-200' : 'bg-red-200'
              }`}
            >
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

export default SponsorFormDrawer

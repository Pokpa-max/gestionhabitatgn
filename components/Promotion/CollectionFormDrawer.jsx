import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { notify } from '../../utils/toast'
import { restaurantsOptions } from '../../_data'
import { addCollection, editCollection } from '../../lib/services/marketing'
import DrawerForm from '../DrawerForm'
import Loader from '../Loader'
import { autoFillCollectionForm } from '../../utils/functionFactory'
import MultiSelect from '../MultiSelect'

function CollectionFormDrawer({ collection, open, setOpen }) {
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
      autoFillCollectionForm(reset, setValue, collection)
    }
    setFormvalue()
  }, [collection])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      if (collection) await editCollection(collection.id, data)
      else await addCollection(data)
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
        title={'Ajouter un Collection'}
        description={"Formulaire de Collectioning d'un restaurant"}
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
              </>
            )}
          </>
        }
      >
        <div className="mt-5 md:col-span-2 md:mt-0">
          {/* <pre>{JSON.stringify(formData, null, 4)}</pre> */}
          <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1 group sm:col-span-1">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Titre
                </label>
                <div className="mt-1 ">
                  <input
                    type="text"
                    {...register('title', {
                      required: 'Champs requis',
                    })}
                    id="title"
                    className="flex-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Titre du commercial"
                  />
                  <p className="pt-1 text-xs text-red-600 font-stratos-light">
                    {errors?.title?.message}
                  </p>
                </div>
              </div>
              <div className="col-span-1 sm:col-span-1">
                <label
                  htmlFor="restaurants"
                  className="block text-sm font-medium text-gray-700"
                >
                  Restaurant
                </label>

                <div className="mt-1">
                  <MultiSelect
                    required={'Champs requis'}
                    name="restaurants"
                    control={control}
                    options={restaurantsOptions}
                    placeholder="Selectionner un restaurant"
                  />
                </div>
                <p className="pt-1 text-xs text-red-600 font-stratos-light">
                  {errors?.restaurants?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DrawerForm>
    </>
  )
}

export default CollectionFormDrawer

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { notify } from '../../utils/toast'
import { addCollection, editCollection } from '../../lib/services/marketing'
import DrawerForm from '../DrawerForm'
import Loader from '../Loader'
import { autoFillCollectionForm } from '../../utils/functionFactory'
import RestaurantSelect, { collectionFormatData } from '../RestaurantSelect'

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

  const formData = watch('restaurants')

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
        title={'Ajouter une Collection'}
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
              <div className="group col-span-1 sm:col-span-1">
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
                    className="block w-full flex-1 border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Titre du commercial"
                  />
                  <p className="pt-1 font-stratos-light text-xs text-red-600">
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
                  <RestaurantSelect
                    control={control}
                    formatData={collectionFormatData}
                    selectOptions={{ isMulti: true }}
                    name="restaurants"
                  />
                </div>
                <p className="pt-1 font-stratos-light text-xs text-red-600">
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

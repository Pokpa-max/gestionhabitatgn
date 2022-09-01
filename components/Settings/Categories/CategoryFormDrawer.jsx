import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { RiImage2Fill } from 'react-icons/ri'
import { notify } from '@/utils/toast'
import { addCategory, editCategory } from '@/lib/services/settings'
import DrawerForm from '../../DrawerForm'
import Loader from '../../Loader'
import Toggle from '../../Toggle'
import { autoFillCategoryForm } from '@/utils/functionFactory'

function CategoryFormDrawer({ category, open, setOpen }) {
  const [loading, setLoading] = useState(false)
  console.log('category', category)
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
      autoFillCategoryForm(reset, setValue, category)
    }
    setFormvalue()
  }, [category])

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      if (category)
        await editCategory(
          category.id,
          data,
          formData?.imageUrl?.length > 0,
          category.imageUrl,
          category.imageUrl1000
        )
      else await addCategory(data)
      reset()

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
        title={'Ajouter un category'}
        description={"Creation d'un category "}
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

          <div className="px-4 py-5 space-y-6 bg-white ">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1 group sm:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <div className="mt-1 ">
                  <input
                    type="text"
                    {...register('name', {
                      required: 'Champs requis',
                    })}
                    id="name"
                    className="flex-1 block w-full border-gray-300 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Titre du category"
                  />
                  <p className="pt-1 text-xs text-red-600 font-stratos-light">
                    {errors?.name?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 sm:items-end sm:gap-4 ">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Image du category
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex justify-center max-w-lg px-2 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xs">
                  <div className="space-y-1 text-center">
                    {formData?.imageUrl?.length > 0 ? (
                      <img
                        src={URL.createObjectURL(formData?.imageUrl[0])}
                        alt="preview"
                      />
                    ) : category ? (
                      <img src={category.imageUrl1000} alt="preview" />
                    ) : (
                      <RiImage2Fill className="w-12 h-12 mx-auto text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative font-medium bg-white rounded-sm cursor-pointer text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
                      >
                        <span>Charger image</span>
                        <input
                          id="file-upload"
                          {...register('imageUrl', {
                            required:
                              formData?.imageUrl?.length == 0 &&
                              !category?.imageUrl,
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
                  <p className="pt-1 text-xs text-red-600 font-stratos-light">
                    {errors?.imageUrl && 'veuillez selectionnez une image'}
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

export default CategoryFormDrawer

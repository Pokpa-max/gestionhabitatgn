import { Disclosure } from '@headlessui/react'
import React from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'

function MenuPreview({ restaurant }) {
  console.log('voir menu ', restaurant)
  return (
    <div className="flex flex-col gap-2 text-teal-500">
      <p>Menu principal</p>
      <div>
        {[1, 2, 3, 4, 5, 6].map((el) => {
          return (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between border-b bg-slate-100 px-4 py-2 text-left text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Plats 🍛</span>
                    <RiArrowUpSLine
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                    {[1, 2, 3, 4, 5, 6].map((el) => {
                      return (
                        <div className="border-b p-2">
                          <div className="flex items-center justify-between">
                            <p className="">Pizza Margarita Maxi</p>
                            <p className="">200 000 GNF</p>
                          </div>
                          <p className="p-2 text-sm text-gray-500">
                            Pizza au 3 frommages cuite au feu de bois avec du
                            salami de chevres en garniture
                          </p>
                        </div>
                      )
                    })}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )
        })}
      </div>
    </div>
  )
}

export default MenuPreview

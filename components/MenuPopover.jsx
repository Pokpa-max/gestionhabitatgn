import React, { Fragment } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function MenuPopover({ options, label }) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-white focus:outline-none ">
            {label}
            <RiArrowDownSLine
              className="ml-1 -mr-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="rounded-xs absolute right-0 mt-2 w-56 origin-top-left bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none md:origin-top-right">
            <div className="py-1">
              {options?.map((option) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <span
                      href={option.href}
                      className={classNames(
                        option.current
                          ? 'font-medium text-gray-900'
                          : 'text-gray-500',
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {option.name}
                    </span>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default MenuPopover

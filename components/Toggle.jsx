import { Switch } from '@headlessui/react'
import { Controller } from 'react-hook-form'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle({ control, name }) {
  return (
    <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex flex-col flex-grow">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900 "
          passive
        >
          Activer
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          Rendre accessible l'etablissement sur l'application B2C
        </Switch.Description>
      </span>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Switch
              checked={field.value}
              onChange={(e) => field.onChange(e)}
              className={classNames(
                field.value ? 'bg-primary' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  field.value ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          )
        }}
      />
    </Switch.Group>
  )
}

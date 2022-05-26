import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useController, UseControllerProps } from 'react-hook-form'
import { UserRegistration } from '../../pages/account/register'

interface DropdownProps {
  dropdownOptions: any
}

const Dropdown = (props: DropdownProps & UseControllerProps<UserRegistration>) => {
  const {
    field: { value, onChange },
  } = useController(props)

  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            style={
              !!value
                ? { paddingTop: '.6875rem', paddingBottom: '.6875rem' }
                : { paddingTop: '1.375rem', paddingBottom: '1.375rem' }
            }
            className="relative mb-3 w-full rounded border bg-white pl-3 pr-10 text-left leading-tight focus:outline-none"
          >
            <span className="block truncate">{value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {Object.keys(props.dropdownOptions).map((value, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-red-100 text-red-900' : 'text-gray-900'
                    }`
                  }
                  value={value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Dropdown

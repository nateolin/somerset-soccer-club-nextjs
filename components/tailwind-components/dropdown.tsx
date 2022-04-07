import { Fragment } from 'react'
import { Listbox, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Dropdown = ({ dropdownOptions }: any) => {
  return (
     <Listbox>
      <Listbox.Button></Listbox.Button>
      <Listbox.Options>
        {Object.keys(dropdownOptions).map((value) => (
          <Listbox.Option
            key={value}
            value={value}
            >
            {value}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

{Object.keys(dropdownOptions).map((key) => (
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {key}
                    </a>
                  )}
                </Menu.Item>



export default Dropdown

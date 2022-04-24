/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  ClipboardListIcon,
  EmojiHappyIcon,
  HandIcon,
  LightBulbIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

const solutions = [
  {
    name: 'Mission',
    href: '/about/mission',
    icon: SparklesIcon,
  },
  {
    name: 'Bylaws',
    href: '/about/bylaws',
    icon: BadgeCheckIcon,
  },
  {
    name: 'Board Members & Positions',
    href: '/about/board',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Meeting Minutes',
    href: '/about/meeting-minutes',
    icon: ClipboardListIcon,
  },
]

const programs = [
  {
    name: 'Little Tikes Program',
    href: 'programs/littleTikes',
    icon: EmojiHappyIcon,
  },
  {
    name: 'Rec Program',
    href: 'programs/rec',
    icon: LightBulbIcon,
  },
  {
    name: 'Competitive Program',
    href: 'programs/competitive',
    icon: AcademicCapIcon,
  },
]

const more = [
  {
    name: 'Common Questions',
    href: 'common-questions',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Involvement',
    href: 'involvement',
    icon: ClipboardListIcon,
  },
  {
    name: 'Coaching',
    href: 'coaching',
    icon: HandIcon,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [user, setUser] = useState(null)

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:pb-8">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="/images/sscLogo.jpg"
                  alt="Somerset Soccer Logo"
                  width={80}
                  height={65}
                />
              </a>
            </Link>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>About SSC</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <div key={item.name}>
                              <Link href={item.href}>
                                <a
                                  key={item.name}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-red-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Programs</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {programs.map((item) => (
                            <div key={item.name}>
                              <Link href={item.href}>
                                <a
                                  key={item.name}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-red-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {more.map((item) => (
                            <div key={item.name}>
                              <Link href={item.href}>
                                <a
                                  key={item.name}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-red-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          {!user && (
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link href="/account/login">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a>
              </Link>
              <Link href="/account/register">
                <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700">
                  Register
                </a>
              </Link>
            </div>
          )}
          {/* {user && (
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link href="account/login">
                <a
                  onClick={logout}
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
                >
                  Sign Out
                </a>
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </Popover>
  )
}

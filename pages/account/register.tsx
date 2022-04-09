import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Layout } from '../../components/layout'
import Dropdown from '../../components/tailwind-components/dropdown'
import { Gender, State } from '../../models/common'

interface UserRegistration {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
  streetAddress: string
  streetAddress2: string
  city: string
  state: State
  zipCode: string
  children: Child[]
}

interface Child {
  childFirstName: string
  childLastName: string
  childGender: Gender | undefined
  childBirthDate: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>()
  const router = useRouter()
  const [children, setChildren] = useState<Child[]>([
    {
      childFirstName: '',
      childLastName: '',
      childGender: undefined,
      childBirthDate: '',
    },
  ])

  const onSubmit: SubmitHandler<UserRegistration> = (data) => console.log(data)

  // console.log(State)

  return (
    <Layout>
      <div className="mx-10vw relative">
        <div className="lg: relative mx-auto mb-12 grid h-auto max-w-7xl place-items-center items-center pt-4 lg:min-h-[40rem]">
          <h2 className="pb-8 text-3xl font-medium leading-tight text-gray-700">
            Contact Information
          </h2>
          <form className="w-full max-w-4xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  First Name
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                  {...register('firstName', { required: true })}
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Last Name
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                  {...register('lastName', { required: true })}
                />
              </div>
              <div className="w-full px-3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Street Address
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                  {...register('streetAddress', { required: true })}
                />
              </div>
              <div className="w-full px-3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  City
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                  {...register('city', { required: true })}
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  State
                </label>
                <Dropdown
                  dropdownOptions={State}
                  defaultValue="WI"
                  // {...register('state', { required: true })}
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Zip Code
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                  {...register('zipCode', { required: true })}
                />
              </div>

              <div className="w-full px-3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Email
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                  {...register('email', { required: true })}
                />
              </div>
              <div className="w-full px-3">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  Phone Number
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                  {...register('phoneNumber', { required: true })}
                />
              </div>
            </div>
            <div>
              <h2 className="pb-8 text-xl font-medium leading-tight text-gray-700">
                Children
              </h2>
              {children.map((child, index) => (
                <div className="-mx-3 mb-6 flex flex-wrap">
                  <div className="w-full px-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                      Child First Name
                    </label>
                    <input
                      className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                      {...register(`children.${index}.childFirstName`, {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                      Child Last Name
                    </label>
                    <input
                      className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
                      {...register(`children.${index}.childLastName`, {
                        required: true,
                      })}
                    />
                  </div>
                  <div>
                    <label>Child Gender</label>
                    <input
                      {...register(`children.${index}.childGender`, {
                        required: true,
                      })}
                    />

                    <label>Child Birth Date</label>
                    <input
                      {...register(`children.${index}.childBirthDate`, {
                        required: true,
                      })}
                    />
                  </div>
                </div>
              ))}
            </div>

            {errors.firstName && <span>First Name is required</span>}
            {errors.lastName && <span>Last Name is required</span>}
            {errors.streetAddress && <span>First Name is required</span>}
            {errors.city && <span>Last Name is required</span>}
            {errors.state && <span>First Name is required</span>}
            {errors.zipCode && <span>Last Name is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Register

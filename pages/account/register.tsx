// import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Layout } from '../../components/layout'
import Dropdown from '../../components/tailwind-components/dropdown'
import { InputWithLabel } from '../../components/tailwind-components/input'
import { PrimaryButton } from '../../components/tailwind-components/primaryButton'
import { SecondaryButton } from '../../components/tailwind-components/secondaryButton'
import { TertiaryButton } from '../../components/tailwind-components/tertiaryButton'
import { Gender, State } from '../../models/common'

export interface UserRegistration {
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

export interface Child {
  childFirstName: string
  childLastName: string
  childGender: Gender | undefined
  childBirthDate: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserRegistration>()

  // const router = useRouter()

  const [children, setChildren] = useState<Child[]>([
    {
      childFirstName: '',
      childLastName: '',
      childGender: undefined,
      childBirthDate: '',
    },
  ])

  const onSubmit: SubmitHandler<UserRegistration> = (data) => console.log(data)

  const addChild = () => {
    setChildren([
      ...children,
      {
        childFirstName: '',
        childLastName: '',
        childGender: undefined,
        childBirthDate: '',
      },
    ])
  }

  const deleteChild = (index: number) => {
    setChildren(children.filter((_, i) => i !== index))
  }

  const logChildren = () => {
    console.log(children)
  }

  return (
    <Layout>
      <div className="mx-10vw relative">
        <div className="lg: relative mx-auto mb-12 grid h-auto max-w-7xl place-items-center items-center pt-4 lg:min-h-[40rem]">
          <form className="w-full max-w-4xl" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="pb-8 text-2xl font-medium leading-tight text-gray-700">
              Contact Information
            </h2>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <InputWithLabel name="firstName" label="First Name" register={register} required />
              </div>

              <div className="w-full px-3 md:w-1/2">
                <InputWithLabel name="lastName" label="Last Name" register={register} required />
              </div>
              <div className="w-full px-3">
                <InputWithLabel
                  name="streetAddress"
                  label="Street Address"
                  register={register}
                  required
                />
              </div>
              <div className="w-full px-3">
                <InputWithLabel name="city" label="City" register={register} required />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                  State
                </label>
                <Dropdown
                  control={control}
                  name="state"
                  // rules={{ required: true }}
                  dropdownOptions={State}
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <InputWithLabel name="zipCode" label="Zip Code" register={register} required />
              </div>

              <div className="w-full px-3">
                <InputWithLabel name="email" label="Email" register={register} required />
              </div>
              <div className="w-full px-3">
                <InputWithLabel
                  name="phoneNumber"
                  label="Phone Number"
                  register={register}
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between py-6">
                <h2 className="text-2xl font-medium leading-tight text-gray-700">Child(ren)</h2>
                <div className="">
                  <TertiaryButton text="Add Another Child" onClick={addChild} />
                </div>
              </div>
              {children.map((child, index) => (
                <div key={`child${index}`}>
                  <div className="inline-flex items-center gap-5 pb-3">
                    <h3 className="pb-3 text-xl font-medium leading-tight text-gray-700">
                      Child {index + 1}
                    </h3>
                    {index > 0 && (
                      <SecondaryButton onClick={() => deleteChild(index)} text="Delete" />
                    )}
                  </div>
                  <div className="-mx-3 mb-6 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2">
                      <InputWithLabel
                        name={`children.${index}.childFirstName`}
                        label="First Name"
                        register={register}
                        required
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <InputWithLabel
                        name={`children.${index}.childLastName`}
                        label="Last Name"
                        register={register}
                        required
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Gender
                      </label>
                      <Dropdown
                        control={control}
                        name={`children.${index}.childGender`}
                        rules={{ required: true }}
                        dropdownOptions={Gender}
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <InputWithLabel
                        name={`children.${index}.childBirthDate`}
                        label="Birth Date"
                        register={register}
                        placeholder="MM/DD/YYYY"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <button
              className="block rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
              type="submit"
            >
              Submit
            </button> */}
            <div className="block">
              <PrimaryButton inputType="submit" />
            </div>
            {errors.firstName && <span>First Name is required</span>}
            {errors.lastName && <span>Last Name is required</span>}
            {errors.streetAddress && <span>First Name is required</span>}
            {errors.city && <span>Last Name is required</span>}
            {errors.state && <span>First Name is required</span>}
            {errors.zipCode && <span>Last Name is required</span>}
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Register

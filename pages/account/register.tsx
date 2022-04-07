import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
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
  childGender: Gender
  childBirthDate: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>()
  const router = useRouter()
  let children: Child[] = []

  const onSubmit: SubmitHandler<UserRegistration> = (data) => console.log(data)

  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
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
            <input
              className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:outline-none"
              {...register('state', { required: true })}
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

          <div>
            <label>Email</label>
            <input {...register('email', { required: true })} />

            <label>Phone Number</label>
            <input {...register('phoneNumber', { required: true })} />
          </div>
        </div>
        <div>
          <label>Children</label>
          {children.map((child, index) => (
            <div>
              <label>Child First Name</label>
              <input
                {...register(`children.${index}.childFirstName`, {
                  required: true,
                })}
              />

              <label>Child Last Name</label>
              <input
                {...register(`children.${index}.childLastName`, {
                  required: true,
                })}
              />

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
  )
}

export default Register

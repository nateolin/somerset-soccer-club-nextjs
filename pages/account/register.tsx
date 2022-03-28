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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email', { required: true })} />

        <label>Phone Number</label>
        <input {...register('phoneNumber', { required: true })} />

        <label>First Name</label>
        <input {...register('firstName', { required: true })} />

        <label>Last Name</label>
        <input {...register('lastName', { required: true })} />

        <label>Street Address</label>
        <input {...register('streetAddress', { required: true })} />

        <label>City</label>
        <input {...register('city', { required: true })} />

        <label>State</label>
        <input {...register('state', { required: true })} />

        <label>Zip Code</label>
        <input {...register('zipCode', { required: true })} />
        <div>
          <label>Children</label>
          {children.map((child) => (
            <div>
              <label>Child First Name</label>
              <input {...register('childFirstName', { required: true })} />

              <label>Child Last Name</label>
              <input {...register('childLastName', { required: true })} />

              <label>Child Gender</label>
              <input {...register('childGender', { required: true })} />

              <label>Child Birth Date</label>
              <input {...register('childBirthDate', { required: true })} />
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

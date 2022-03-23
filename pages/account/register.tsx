import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Layout } from 'components/account'
import { userService, alertService } from 'services'
import Link from 'next/link'

export default Register

function Register() {
  const router = useRouter()

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit(user: any) {
    return userService
      .register(user)
      .then(() => {
        alertService.success('Registration successful', {
          keepAfterRouteChange: true,
        })
        router.push('login')
      })
      .catch(alertService.error)
  }

  return (
    <Layout>
      <div className="">
        <h4 className="">Register</h4>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label>First Name</label>
              <input
                type="text"
                {...register('firstName')}
                // className={}
                // `form-control ${
                //   errors.firstName ? 'is-invalid' : ''
                // }`
              />
              <div className="">{errors.firstName?.message}</div>
            </div>
            <div className="">
              <label>Last Name</label>
              <input
                type="text"
                {...register('lastName')}
                // className={}
                // `form-control ${
                //   errors.lastName ? 'is-invalid' : ''
                // }`}
              />
              <div className="">{errors.lastName?.message}</div>
            </div>
            <div className="">
              <label>Username</label>
              <input
                type="text"
                {...register('username')}
                // className={`form-control ${
                //   errors.username ? 'is-invalid' : ''
                // }`}
              />
              <div className="">{errors.username?.message}</div>
            </div>
            <div className="">
              <label>Password</label>
              <input
                type="password"
                {...register('password')}
                // className={`form-control ${
                //   errors.password ? 'is-invalid' : ''
                // }`}
              />
              <div className="">{errors.password?.message}</div>
            </div>
            <button disabled={formState.isSubmitting} className="">
              {formState.isSubmitting && <span className=""></span>}
              Register
            </button>
            <Link href="/account/login">
              <a>Cancel</a>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  )
}

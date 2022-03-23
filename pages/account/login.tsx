import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Layout } from 'components/account'
import { userService, alertService } from 'services'
import Link from 'next/link'

interface UserPass {
  username: string
  password: string
}

const Login = () => {
  const router = useRouter()

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm<UserPass>(formOptions)
  const { errors } = formState

  const onSubmit: SubmitHandler<UserPass> = ({ username, password }) => {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query || ''
        router.push(returnUrl)
      })
      .catch(alertService.error)
  }

  return (
    <Layout>
      <div className="">
        <h4 className="">Login</h4>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label>Username</label>
              <input
                type=""
                {...register('username')}
                className={`form-control ${
                  errors.username ? 'is-invalid' : ''
                }`}
              />
              <div className="">{errors.username?.message}</div>
            </div>
            <div className="">
              <label>Password</label>
              <input
                type="password"
                {...register('password')}
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
              />
              <div className="">{errors.password?.message}</div>
            </div>
            <button disabled={formState.isSubmitting} className="">
              {formState.isSubmitting && <span className=""></span>}
              Login
            </button>
            <Link href="/account/register">
              <a>Register</a>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login

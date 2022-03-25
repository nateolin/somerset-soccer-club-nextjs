import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'

interface EmailPass {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailPass>()
  const router = useRouter()

  const onSubmit: SubmitHandler<EmailPass> = (data) => console.log(data)

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('email')}></input>
        <input {...register('password', { required: true })} />

        {errors.password && <span>password is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default Login

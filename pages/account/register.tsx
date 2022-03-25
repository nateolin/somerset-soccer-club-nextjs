import { SubmitHandler, useForm } from 'react-hook-form'
import { State } from '../../models/common'

interface UserRegistration {
  firstName: string
  lastName: string
  address: string
  address2: string
  city: string
  state: State
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistration>()
  const router = useRouter()

  const onSubmit: SubmitHandler<UserRegistration> = (data) => console.log(data)

  return <div></div>
}

export default Register

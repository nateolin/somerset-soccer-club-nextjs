import { Path, UseFormRegister } from 'react-hook-form'
import { UserRegistration } from '../../pages/account/register'

interface InputWithLabelProps {
  name: Path<UserRegistration>
  label: string
  register: UseFormRegister<UserRegistration>
  required: boolean
  placeholder?: string
  defaultValue?: string
}

export const InputWithLabel = ({
  name,
  label,
  register,
  required,
  placeholder,
  defaultValue,
}: InputWithLabelProps) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 ">
        {label}
      </label>
      <input
        {...register(name, { required })}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
    </div>
  )
}

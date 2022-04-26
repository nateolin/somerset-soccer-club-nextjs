export const InputWithLabel = (
  name: string,
  label: string,
  placeholder: string,
  defaultValue: string
) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 ">
        {label}
      </label>
      <input
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
    </div>
  )
}

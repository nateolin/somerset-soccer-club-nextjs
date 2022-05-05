interface PrimaryButtonProps {
  inputType: string
}

export const PrimaryButton = ({ inputType }: PrimaryButtonProps) => {
  return (
    <input
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
      type={inputType}
    />
  )
}

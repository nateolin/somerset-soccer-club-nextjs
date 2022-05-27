interface SecondaryButtonProps {
  text: string
}

export const SecondaryButton = ({ text }: SecondaryButtonProps) => {
  return (
    <button
      className="whitespace-nowrap rounded-md border border-red-600 px-4 py-2 text-base font-medium text-red-600 hover:border-red-700 hover:text-red-700 active:border-red-800 active:text-red-800"
      type="button"
    >
      {text}
    </button>
  )
}

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface TertiaryButtonProps {
  onClick: any
  text: string
}

export const TertiaryButton = ({ onClick, text }: TertiaryButtonProps) => {
  return (
    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md 
      px-4 py-2 text-base font-medium text-cyan-700 hover:bg-cyan-100 hover:shadow-sm 
      focus:bg-cyan-100 focus:shadow-sm focus:outline-none focus:ring-0 active:bg-cyan-200 
      active:shadow-sm"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  )
}

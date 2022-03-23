import NextLink from 'next/link'
import { ChildrenPropType } from '../models/react-types'

export { CustomLink }

interface CustomLinkProps {
  href: string
  children: ChildrenPropType
}

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

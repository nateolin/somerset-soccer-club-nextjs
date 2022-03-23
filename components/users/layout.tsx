import { ChildrenPropType } from '../../models/react-types'

export { Layout }

const Layout = ({ children }: ChildrenPropType) => {
  return (
    <div className="px-4 py-4">
      <div className="">{children}</div>
    </div>
  )
}

import React, { ReactNode } from 'react'
import Head from 'next/head'
import FooterComponent from './footer'
import HeaderComponent from './header'
import { ChildrenPropType } from '../models/react-types'

export const siteTitle = 'Somerset Soccer Club'

const Layout = ({ children }: ChildrenPropType) => {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <meta name="description" content="Somerset Soccer Club Website" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  )
}

export { Layout }

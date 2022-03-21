import React, { ReactNode } from 'react'
import Head from 'next/head'
import FooterComponent from './footer'
import HeaderComponent from './header'

export const siteTitle = 'Somerset Soccer Club'

interface AuxProps {
  children: ReactNode
}

const Layout = ({ children }: AuxProps) => {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <meta name="description" content="Somerset Soccer Club Website" />
        <meta name="og:title" content={siteTitle} />
        <script defer src="/your-path-to-fontawesome/js/all.js"></script>
      </Head>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  )
}

export { Layout }

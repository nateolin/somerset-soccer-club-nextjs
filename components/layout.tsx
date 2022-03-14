import React from 'react'
import Head from 'next/head'

export const siteTitle = 'Somerset Soccer Club'

const Layout = (children: React.ReactNode) => {
  return (
    <div>
      <Head>
        <meta name="description" content="Somerset Soccer Club Website" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export { Layout }

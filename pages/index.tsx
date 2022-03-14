import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/layout'

const Home: NextPage = () => {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Somerset Soccer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </div>
  )
}

export default Home

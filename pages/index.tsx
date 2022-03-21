import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout'
import soccerBallWithSunBehind from '../public/images/soccer-ball-sun-behind.jpg'

const Home: NextPage = () => {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Somerset Soccer Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mx-10vw relative">
          <div className="lg: relative mx-auto mb-12 grid h-auto max-w-7xl grid-cols-4 gap-x-4 pt-24 md:grid-cols-8 lg:min-h-[40rem] lg:grid-cols-10 lg:gap-x-4">
            <div className="col-span-full pt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col">
              <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
                <div style={{ opacity: 1, transform: 'none' }}>
                  <h2 className="pb-4 font-serif text-7xl leading-tight text-black">
                    Somerset Soccer Club
                  </h2>
                  <p className="text-2xl leading-tight text-black">
                    Our mission is to provide continuous improvement of soccer
                    knowledge, skills, and sportsmanship in an enjoyable
                    environment, while promoting the growth of soccer and
                    instilling a lifelong passion for the sport. We will
                    challenge players to develop their abilities to a higher
                    level in preparation of entering the high school program.
                  </p>
                </div>
                <div
                  className="mt-14 flex flex-col space-y-4"
                  style={{ opacity: 1, transform: 'none' }}
                >
                  <div className="mr-auto flex flex-col gap-4">
                    <a
                      className="rounded-xl bg-red-700 py-4 px-6 text-center font-medium text-white hover:bg-red-800"
                      href="/rec"
                    >
                      Rec Program
                    </a>
                    <a
                      className="rounded-xl border border-red-800 bg-transparent py-4 px-6 font-medium text-red-700 hover:border-transparent hover:bg-red-800 hover:text-white"
                      href="/competitive"
                    >
                      Competitive Program
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:-mr-5vw col-span-full mb-12 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:mb-0 lg:-mt-24 lg:pl-12">
              <Image
                priority
                src="/images/soccer-ball-sun-behind.jpg"
                className="max-h-75vh h-auto w-full rounded-3xl object-contain"
                layout="intrinsic"
                height={soccerBallWithSunBehind.height}
                width={soccerBallWithSunBehind.width}
                alt="hi there"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home

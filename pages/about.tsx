import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layout'
import footOnBall from '../public/images/foot-on-ball.jpg'

export default function About() {
  return (
    <Layout>
      <div className="mx-10vw relative">
        <div className="lg: relative mx-auto mb-12 grid h-auto max-w-7xl grid-cols-4 gap-x-4 pt-24 md:grid-cols-8 lg:min-h-[40rem] lg:grid-cols-10 lg:gap-x-4">
          <div className="col-span-full lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:-mt-12 lg:flex lg:h-full lg:flex-col">
            <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
              <div style={{ opacity: 1, transform: 'none' }}>
                <h2 className="pb-8 text-4xl font-medium leading-tight text-black">
                  About Us
                </h2>
                <p className="pb-6 text-2xl leading-tight text-black">
                  Somerset Soccer Club has been serving members in Western
                  Wisconsin since 2001. It was founded to help promote
                  sportsmanship and community in the Somerset area. We are an
                  independent, volunteer, non-profit organization serving 4-18
                  year old boys and girls. The organization is run completely by
                  volunteer support.
                </p>
                <p className="text-2xl leading-tight text-black">
                  Our mission is to provide continuous improvement of soccer
                  knowledge, skills, and sportsmanship in an enjoyable
                  environment, while promoting the growth of soccer and
                  instilling a lifelong passion for the sport. We will challenge
                  players to develop their abilities to a higher level in
                  preparation of entering the high school program. You can reach
                  us at{' '}
                  <a
                    className="text-sky-600 underline"
                    href="mailto:somersetsoccer@gmail.com"
                  >
                    somersetsoccer@gmail.com
                  </a>
                </p>
              </div>
              <div
                className="mt-14 flex flex-col space-y-4"
                style={{ opacity: 1, transform: 'none' }}
              ></div>
            </div>
          </div>
          <div className="lg:-mr-5vw col-span-full mb-12 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:mb-0 lg:-mt-24 lg:pl-12">
            <Image
              className="max-h-75vh h-auto w-full rounded-3xl object-contain"
              src="/images/foot-on-ball.jpg"
              height={footOnBall.height}
              width={footOnBall.width}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

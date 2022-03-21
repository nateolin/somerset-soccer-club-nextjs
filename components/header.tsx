import Image from 'next/image'
import Link from 'next/link'

const HeaderComponent = () => {
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="max-w-8xl mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/images/sscLogo.jpg"
              alt="Somerset Soccer Logo"
              width={120}
              height={100}
            />

            <div className="px-4 text-2xl text-slate-600">
              <div className="underlined delay-50 block whitespace-nowrap font-medium transition duration-200 ease-in-out hover:text-red-600 focus:outline-none">
                Somerset Soccer Club
              </div>
            </div>
          </a>
        </Link>
        <div className="hidden lg:flex">
          <div className="flex items-center justify-center font-medium">
            <div className="px-5">
              <Link href="/about">
                <a className="delay-50 text-lg text-slate-600 duration-200 hover:text-red-600">
                  About Us
                </a>
              </Link>
            </div>
            <div className="px-5">
              <Link href="/rec">
                <a className="delay-50 text-lg text-slate-600 duration-200 hover:text-red-600">
                  Rec Soccer
                </a>
              </Link>
            </div>
            <div className="px-5">
              <Link href="/competitive">
                <a className="delay-50 text-lg text-slate-600 duration-200 hover:text-red-600">
                  Competitive Soccer
                </a>
              </Link>
            </div>
            <div className="px-5">
              <Link href="/faq">
                <a className="delay-50 text-lg text-slate-600 duration-200 hover:text-red-600">
                  FAQ's
                </a>
              </Link>
            </div>

            <div className="px-5">
              <Link href="/register">
                <a className="text-lg text-slate-600 hover:text-red-600">
                  Register
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="focus:border-primary hover:border-primary inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition focus:outline-none">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default HeaderComponent

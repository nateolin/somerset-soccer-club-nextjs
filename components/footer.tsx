import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const FooterComponent = () => {
  return (
    <footer className="relative inset-x-0 bottom-0 border-t border-gray-200 pb-16 pt-16">
      <div className="mx-10vw relative">
        <div className="grid-rows-max-content relative mx-auto grid max-w-7xl grid-cols-4 gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full md:col-span-4 xl:row-span-3">
            <div className="text-2xl font-medium">
              Somerset Soccer Association
            </div>
            <p className="mt-6 text-xl text-gray-600 hover:text-red-600 focus:outline-none">
              <a href="https://www.wiyouthsoccer.com/">
                Wisconsin Youth Soccer Association
              </a>
            </p>
            <p className="text-xl text-gray-600 hover:text-red-600 focus:outline-none">
              <a href="https://www.stcroixsoccer.org/">St. Croix Soccer Club</a>
            </p>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/Somerset-Soccer-Club-248996298458580/`,
                      '_blank'
                    )
                  }
                  className=""
                >
                  <BsFacebook />
                </button>
                <button
                  onClick={() =>
                    window.open(`https://twitter.com/SomersetSoccer1`, '_blank')
                  }
                >
                  <BsInstagram />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.instagram.com/somersetsoccer/`,
                      '_blank'
                    )
                  }
                >
                  <BsTwitter />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-20 md:col-start-8 md:row-start-1 md:mt-0">
            <div>
              <div className="text-lg font-medium text-black">Contact</div>
              <ul className="mt-4">
                <li>Email Address: somersetsoccer@gmail.com</li>
                <br />
                <li>Mailing Address</li>
                <li>P.O. Box 75</li>
                <li>Somerset, WI 54025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent

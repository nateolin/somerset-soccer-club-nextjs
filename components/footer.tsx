const FooterComponent = () => {
  return (
    <footer className="relative inset-x-0 bottom-0 border-t border-gray-200 pb-16 pt-16">
      <div className="mx-10vw relative">
        <div className="grid-rows-max-content relative mx-auto grid max-w-7xl grid-cols-4 gap-x-4">
          <div className="col-span-full">
            <div className="text-xl font-medium">
              Somerset Soccer Association
            </div>
            <p className="mt-6 text-2xl text-gray-600">
              Insert League Name or Info Here
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
                >
                  <i className="fa-brands fa-facebook fa-2xl" />
                </button>
                <button
                  onClick={() =>
                    window.open(`https://twitter.com/SomersetSoccer1`, '_blank')
                  }
                >
                  <i className="fa-brands fa-twitter fa-2xl" />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.instagram.com/somersetsoccer/`,
                      '_blank'
                    )
                  }
                >
                  <i className="fa-brands fa-instagram fa-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent

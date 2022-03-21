import { Layout } from '../components/layout'

export default function Competitive() {
  return (
    <Layout>
      <div className="mx-10vw relative">
        <div className="relative mx-auto max-w-7xl">
          <div className="border-b">
            <h2 className="pb-8 text-4xl font-medium leading-tight text-black">
              Competitive Program
            </h2>
          </div>
        </div>
        <div className="lg: relative mx-auto mb-12 h-auto max-w-7xl pt-24 lg:min-h-[40rem]">
          <div className="col-span-full lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:-mt-12 lg:flex lg:h-full lg:flex-col">
            <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
              <div style={{ opacity: 1, transform: 'none' }}>
                <h3 className="pb-6 text-3xl font-medium leading-tight text-black">
                  General Information
                </h3>
                <p className="pb-6 text-xl leading-tight text-black">
                  Our Competitive Program is offered to both boys and girls
                  playing in the spring/summer season or fall season. The
                  Competitive Program provides the opportunity to be more
                  competitive while offering advanced instruction, playing with
                  your peers, the ability to play against teams from outside of
                  Somerset. Practices are normally twice per week and teams will
                  play 3-4 tournaments or jamborees
                </p>

                <h3 className="pt-12 pb-6 text-3xl font-medium leading-tight text-black">
                  Detailed Information
                </h3>
                <h4 className="pb-4 text-2xl leading-tight">
                  Junior Kindergarten/Kindergarten (U6)
                </h4>
                <ul className="list-disc px-12 pb-12 text-xl leading-tight text-black">
                  <li>
                    Session runs from 10:00 a.m. to 11:00 a.m. on Saturday
                  </li>
                  <li>
                    This age group uses a size 3 soccer ball (provided with
                    registration) and plays 4 versus 4 (No Goalkeepers)
                  </li>
                  <li>
                    Players should wear their new t-shirt and also bring their
                    new ball with them each Saturday. Scrimmage vests will be
                    provided when scrimmaging
                  </li>
                  {/* <li>Goals will be six-foot “Pugg” goal</li> */}
                </ul>
                <h4 className="pb-4 text-2xl leading-tight">
                  1st Grade/2nd Grade (U8)
                </h4>
                <ul className="list-disc px-12 pb-12 text-xl leading-tight text-black">
                  <li>
                    {' '}
                    Session runs from 9:15 a.m. to 10:15 a.m. on Saturday
                  </li>
                  <li>
                    This age group uses a size 4 soccer ball (provided with
                    registration) and plays with 6-8 players per team (No
                    Goalkeepers)
                  </li>
                  <li>
                    Players should wear their new t-shirt and also bring their
                    new ball with them each Saturday. Scrimmage vests will be
                    provided when scrimmaging
                  </li>
                  {/* <li>Goal size is 4 feet high x 6 feet wide x 2 feet deep</li> */}
                </ul>
                <h4 className="pb-4 text-2xl leading-tight">
                  3rd Grade/4th Grade/5th Grade (U11)
                </h4>
                <ul className="list-disc px-12 text-xl leading-tight text-black">
                  <li>Session runs from 8:30 a.m. to 9:30 a.m. on Saturday</li>
                  <li>
                    This age group uses a size 4 soccer ball (provided with
                    registration) and plays with 6-8 players per team
                  </li>
                  <li>
                    Players should wear their new t-shirt and also bring their
                    new ball with them each Saturday. Scrimmage vests will be
                    provided when scrimmaging
                  </li>
                  {/* <li> Goal size is 7 feet high by 21 feet wide</li> */}
                </ul>
              </div>
              {/* <div
              className="mt-14 flex flex-col space-y-4"
              style={{ opacity: 1, transform: "none" }}
            ></div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

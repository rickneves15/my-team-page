import Image from "next/image"

type PeopleType = {
  url: string
  name: string
  role: string
}

const team: PeopleType[] = [
  { url: "/photo1.png", name: "Bill Mahoney", role: "product owner" },
  { url: "/photo2.png", name: "Saba Cabrera", role: "art director" },
  { url: "/photo3.png", name: "Shae le", role: "tech lead" },
  { url: "/photo4.png", name: "Shylah lu", role: "ux design" },
  { url: "/photo5.png", name: "Griff Richards", role: "developer" },
  { url: "/photo6.png", name: "Stan John", role: "developer" },
]

export default function Home() {
  return (
    <div className="max-w-screen max-h-screen flex flex-col px-6 pb-6 pt-16">
      <div className="flex flex-col">
        <h1 className="font-alt text-4xl font-bold">The creative crew</h1>
        <div className="flex flex-col mt-9 gap-3">
          <h2 className="font-semibold text-lg uppercase">who are you</h2>
          <p className="font-normal text-sm leading-5">We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2 grid-rows-3 mt-20 gap-14 md:grid-cols-3 md:md:grid-rows-2">
          {team.map((people, index) => (
            <div key={index} className="flex flex-col max-w-[264px] max-h-[383px] even:mt-14 md:[&:nth-child(3n+2)]:mt-14 md:even:mt-0">
              <div className="flex">
                <div className="relative w-[238px] h-[341px]">
                  <Image src={people.url} alt={people.name} fill className="object-cover" />
                </div>
                <span className="font-alt text-xs font-normal" style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed'
                }}>{people.role}</span>
              </div>
              <span className="font-semibold text-lg mt-4">{people.name}</span>
            </div>

          ))}
        </div>
      </div>
      <footer className="flex justify-center font-footer text-sm text-gray-300 mt-12">created by &nbsp;<span className="font-bold text-gray-400">Rick Neves</span>&nbsp; - devChallenges.io</footer>
    </div >
  )
}

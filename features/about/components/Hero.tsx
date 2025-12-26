import Link from 'next/link'
export default function Hero() {
  return (
    <div className="relative hero-bg px-3 py-8 flex flex-col">
      <div className="absolute inset-x-0 top-0 bottom-0 bg-black opacity-50 -z-10"></div>
      <h1 className="z-10 text-4xl text-center font-bold">Know Your Status <span className="text-primary block">Own Your Health</span></h1>
      <p className=" z-10 text-left text-sm py-4 text-background">Understanding your genetic health is the first step towards an empowered life. Whether your are looking for testing centers or managing daily care, We are here to help guide your journey.</p>
      <div className="z-10 flex flex-row justify-center gap-4">
        <Link href="/about/center" className="bg-primary text-sm text-background rounded-full font-semibold px-4 py-2"><span>Find a Testing Center</span></Link>
        <button className="border border-background rounded-full font-semibold px-4 py-2 text-sm text-background">Learn about Traits</button>
      </div>
    </div>
  )
}

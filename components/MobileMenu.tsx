import Link from 'next/link'
import { X } from 'lucide-react'

export default function MobileMenu({ closeSideBar = () => { } }: { closeSideBar?: (state: boolean) => void }) {
  return (
    <div className="sticky top-0 w-full h-full flex flex-col gap-10 px-4">
      <ul className="flex flex-col gap-6 py-4">
        <X className="lg:hidden self-end" size={24} onClick={() => closeSideBar(false)} />
        <Link href="/"><li className="text-xl font-bold tracking-light hover:text-primary">Home</li></Link>
        <Link href="/about"><li className="text-xl font-bold tracking-light hover:text-primary">About</li></Link>
        <Link href="/"><li className="text-xl font-bold tracking-light hover:text-primary">Resources</li></Link>
      </ul>
      <div className="flex items-stretch justify-center w-full">
        <Link href="/about/center" className="w-5/6 mx-auto"><span className="flex-initial self-center bg-primary text-background font-bold px-8 py-3 rounded-full w-full">Find Care</span></Link>
      </div>
    </div>
  )
}

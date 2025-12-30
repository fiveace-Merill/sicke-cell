import Link from 'next/link'
import { X } from 'lucide-react'

export default function MobileMenu({ closeSideBar = () => { } }: { closeSideBar?: (state: boolean) => void }) {
  return (
    <div className="w-full h-full flex flex-col px-8">
      <ul className="flex flex-col gap-10 py-4">
        <X className="lg:hidden self-end" onClick={() => closeSideBar(false)} />
        <Link href="/"><li className="text-4xl font-bold tracking-light hover:text-primary">Home</li></Link>
        <Link href="/about"><li className="text-4xl font-bold tracking-light hover:text-primary">About</li></Link>
        <Link href="/"><li className="text-4xl font-bold tracking-light hover:text-primary">Resources</li></Link>
        <Link href="/about/center"><li className="w-full"><span className="bg-plrimary text-background font-bold px-8 py-3 rounded-full w-full ">Find Care</span></li></Link>
      </ul>
    </div>
  )
}

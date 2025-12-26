import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex items-center px-3 py-4 justify-between border-b border-on-background/10 lg:px-8">
      <div className="flex gap-2">
        <Image
          src="/logo.jpg"
          alt="ribbon_logo"
          width={24}
          height={24}
          className="aspect-auto"
        />
        <p className="tracking-wider font-semibold">SDC</p>
      </div>
      <ul className="hidden gap-8 font-bold lg:flex lg:flex-row">
        <Link href="/"><li className="nav-link">Home</li></Link>
        <Link href="/about"><li className="nav-lin">About</li></Link>
        <Link href="/about/testing"><li className="nav-link">Testing and Care</li></Link>
        <li className="nav-link">Story</li>
        <Link href="/about/center"><li><span className="nav-link-buton px-4 py-2 rounded-full bg-primary text-white">Find Care</span></li></Link>
      </ul>
      <div className='lg:hidden'>
        <Menu />
      </div>
    </nav >
  )
}

import MenuWrapper from './MenuWrapper'
import Link from 'next/link'
import Image from 'next/image'

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
        <Link href="/about"><li className="nav-link">About</li></Link>
        <li className="nav-link">Stories</li>
        <li className="nav-link">Resources</li>
        <li><span className="nav-link-buton px-4 py-2 rounded-full bg-primary text-white">Donate</span></li>
      </ul>
      <MenuWrapper />
    </nav >
  )
} 

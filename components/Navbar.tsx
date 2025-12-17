import { Menu } from 'lucide-react'
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
        <li>About</li>
        <li>Stories</li>
        <li>Resources</li>
        <li><span className="px-4 py-2 rounded-full bg-primary text-white">Donate</span></li>
      </ul>
      <div className='lg:hidden'>
        <Menu />
      </div>
    </nav >
  )
} 

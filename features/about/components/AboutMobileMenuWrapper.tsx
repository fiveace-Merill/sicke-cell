
"use client"
import { useState } from 'react'
import { Menu } from 'lucide-react'
import AboutMobileMenu from './AboutMobileMenu'

export default function AboutMobileMenuWrapper() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`${isOpen ? "absolute morph left-0 right-1/12 bottom-0 top-0" : "flex flex-col lg:hidden"} bg-background z-15`}>
      <Menu
        size={28}
        className={`${isOpen ? "hidden" : "static"} cursor-pointer self-end`}
        onClick={() => setIsOpen(true)}
      />
      <div className="sticky top-0 inset-x-0">
        {
          isOpen && <AboutMobileMenu closeSideBar={setIsOpen} />
        }
      </div>
    </div>
  )
}

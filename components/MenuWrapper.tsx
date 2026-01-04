"use client"
import { useState } from 'react'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function MenuWrapper() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`${isOpen ? "absolute morph left-0 right-1/12 bottom-0 top-0 h-full" : "flex flex-col lg:hidden"} z-15`}>
      <Menu
        size={28}
        className={`${isOpen ? "hidden" : "static"} cursor-pointer self-end`}
        onClick={() => setIsOpen(true)}
      />
      {
        isOpen && <MobileMenu closeSideBar={setIsOpen} />
      }
    </div>
  )
}

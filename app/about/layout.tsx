import React from 'react'
import Navbar from '@/features/about/components/Navbar'
import Footer from '@/features/about/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-full flex flex-col">
      <Navbar />
      <section className="flex-1 py-10 px-8">
        {children}
      </section>
      <Footer />
    </main>
  )
}

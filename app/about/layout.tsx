import React from 'react'
import Navbar from '@/features/about/components/Navbar'
import Footer from '@/features/about/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col">
      <Navbar />
      <section>
        {children}
      </section>
      <Footer />
    </main>
  )
}

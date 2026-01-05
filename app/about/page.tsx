import Image from 'next/image'
import SymptomCard from '@/components/SymptomCard'
import MythAccordion from '@/components/MythAccordion'
import Hero from '@/features/about/components/Hero'
import { AlertTriangle, BadgeCheck } from 'lucide-react'

export default function About() {
  return (
    <div className="flex flex-col gap-4 lg:items-center">
      <Hero />
      <div className="">
        <section className="px-3 py-4 flex flex-col gap-12 lg:px-20 lg:py-16 lg:flex-row lg:items-center lg:justify-center lg:gap-4">
          <div className="lg:px-8">
            <h3 className="text-xl text-center font-bold tracking-wide lg:text-4xl">More than a <span className="text-primary">diagnosis.</span></h3>
            <p className="text-lg text-left align-middle py-3 lg:text-balance lg:text-center lg:px-4 lg:py-8">Understanding Sickle Cell Disease through human storytelling and clear medical facts. A resource for families, friends, and fighters.</p>
            <div className="flex justify-center gap-6">
              <button className="bg-primary px-6 py-2 rounded-full text-sm font-semibold text-background">Start Learning</button>
              <button className="px-6 py-2 rounded-full text-sm font-semibold border border-on-background text-on-background">Watch Video</button>
            </div>
          </div>
          <div className="h-8/12 rounded-3xl aspect-square lg:basis-1/2">
            <Image src="/exercise.jpg" height={80} width={75} alt='sub-image' className="w-full h-full rounded-3xl aspect-square bg-cover object-cover bg-no-repeat bg-clip-border" />
          </div>
        </section>
        <section className="px-3 py-8 bg-gray-50 lg:py-16">
          <div>
            <h1 className="font-semibold text-2xl text-center lg:text-4xl lg:py-4">What is Sickle Cell?</h1>
            <p className="text-md py-2 text-pretty text-center lg:w-1/2 lg:mx-auto">Sickle Cell Disease(SCD) is a genetic blood disorder that affects the shape of red blood cells. Normal red blood cells are round and flexible, but in SD, some become rigid and shaped like a cresent moon, or sickle. </p>
          </div>
          <div className="flex flex-col gap-9 py-8 justify-center mx-auto items-center lg:flex-row lg:py-12 lg:gap-6 lg:w-4/6">
            <div className="relative flex flex-col items-center bg-background rounded-3xl p-8 lg:max-w-1/2">
              <BadgeCheck className="absolute top-3 right-3 text-green-400" />
              <div className="w-36 h-36 rounded-full bg-primary">
              </div>
              <p className="font-semibold pt-6">Healthy Red Blood Cell</p>
              <p className="pt-2 px-3 text-center">Round and flexible. Moves easily through blood vessels to deliver oxygen.</p>
            </div>
            <div className="relative flex flex-col items-center bg-background rounded-3xl p-8 lg:max-w-1/2">
              <AlertTriangle className="absolute top-3 right-3 text-primary" />
              <div className="w-36 h-36 rounded-full bg-primary">
              </div>
              <p className="font-semibold pt-6">Healthy Red Blood Cell</p>
              <p className="pt-2 px-3 text-center">Round and flexible. Moves easily through blood vessels to deliver oxygen.</p>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl py-4 bg-primary text-background lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:rounded-3xl lg:p-8 lg:w-4/6 lg:mx-auto">
            <div className="py-3 text-center lg:px-8 lg:text-left">
              <p className="text-xs font-semibold tracking-wide lg:py-3">PREVENTION AND PLANNING</p>
              <p className="text-center font-semibold lg:text-3xl lg:text-left lg:font-extrabold">Genotype testing is essential.</p>
              <p className="text-pretty py-2 lg:text-justify">Knowing your genotype (AA, AS,SS) is the first step in awareness and responsible family planning.</p>
            </div>
            <div className="flex justify-center px-4 items-center lg:px-8 lg:w-1/2 lg:h-full">
              <button className="w-full bg-background text-primary text-sm rounded-full font-semibold px-3 py-2">Find a testing Center</button>
            </div>
          </div>
        </section>
        <section className="px-3 py-8 lg:py-16">
          <div className="flex flex-col lg:gap-1">
            <p className="text-sm text-primary text-center font-semibold lg:text-lg">What to look for</p>
            <p className="text-xl text-center font-semibold tracking-wide lg:text-4xl">Common Symptoms</p>
          </div>
          <div className="grid gap-4 py-4 grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:px-8 lg:py-12 lg:gap-8 lg:grid-cols-3 lg:grid-rows-1">
            <SymptomCard />
          </div>
          <div className="py-8 lg:px-2 lg:w-4/6 lg:mx-auto">
            <h3 className="text-xl text-center font-semibold tracking-wide lg:text-left lg:text-4xl">Myths vs. Facts</h3>
            <p className="text-sm text-center py-2 lg:text-left lg:text-md">Dispelling common misconceptions about the condition.</p>
            <div className="py-4">
              <MythAccordion />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

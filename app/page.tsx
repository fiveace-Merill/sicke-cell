import Image from 'next/image'
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/lib/data';
import { span, heading, button } from "@/styles/styles";
import { Share2, Microscope, Heart, Megaphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import InfoCard from '@/components/InfoCard';
export default function Home() {
  return (
    <main className="flex flex-col gap-3">
      <Navbar />
      <section className="relative flex flex-col gap-6 pt-3 lg:flex-row lg:py-6">
        <div className="px-3 lg:basis-1/2 lg:pl-8 lg:flex lg:flex-col lg:justify-start lg:gap-3 lg:self-stretch">
          <h1 className="bg-primary-container text-on-primary-container text-center text-sm px-3 py-2 rounded-md w-5/12">HEALTH INITIATIVE</h1>
          <p className={`${heading} mt-4 lg:text-6xl lg:text-left lg:tracking-tight`}>Sickle Cell Awareness:<span className={`${span}`} > A<br />Personal Journey.</span> A shared responsibility.</p>
          <p className="mt-3 lg:text-xl">Bridging the gap between medical science and human stories. Join the movement for better care, understanding, and hope.</p>
          <div className="mt-6 flex gap-3 w-full justify-center lg:gap-8">
            <button className={`${button} font-semibold bg-primary text-white flex gap-2 justify-center items-center text-sm hover:bg-primary-container hover:text-on-primary-container lg:px-6 lg:text-lg lg:rounded-full`}><Microscope size={12} /> Get Tested</button>
            <span className={`${button} px-4 text-sm flex justify-center items-center border border-black rounded-full hover:text-on-background/80 hover:border hover:border-on-background/80 hover:font-bold lg:px-6 lg:text-lg`}>Learn More</span>
            <span className={`${button} font-semibold text-on-background flex gap-2 justify-center items-center text-sm hover:bg-secondary hover:text-on-secondary lg:px-6 lg:text-lg lg:rounded-full`}><Share2 size={12} />Share Awareness</span>
          </div>
        </div>
        <div className="relative lg:flex lg:items-stretch lg:justify-center lg:shadow-black/50 lg:shadow-2xl lg:w-full lg:rounded-lg">
          <div className="absolute inset-x-0 inset-y-0 bg-black opacity-70 z-5 lg:rounded-2xl"></div>
          <Image
            src="/doctor-consultation-2.jpg"
            width={190}
            height={60}
            className="w-full aspect-auto rounded-lg lg:w-full lg:h-full lg:rounded-2xl"
            alt="hero-image"
          />
          <div className="z-10 absolute left-3 bottom-5 flex items-center gap-3 bg-background text-on-background-container px-3 py-2 rounded-full">
            <Heart fill="red" stroke="red" />
            <div className="flex flex-col">
              <h3 className="text-sm">Community Support</h3>
              <p className="text-xs"><span className='text-secondary'>10k</span> Families</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-container ">
        <div className="w-full py-5 lg:pl-8 lg:mt-8">
          <h2 className="text-center text-xl font-extrabold py-3 lg:text-left lg:text-4xl">Understanding Sickle Cell</h2>
          <p className="text-justify text-md text-on-background px-6 lg:px-0 lg:text-left">Key information to bridge the gap in medical knowledge and dispel common myths about the condition.</p>
        </div>
        <div className="flex flex-col items-center gap-6 px-3 py-6 lg:flex-row lg:px-9 lg:pb-18">
          <InfoCard />
        </div>
      </section>
      <section>
        <p className="font-bold text-center py-2 lg:mt-10 lg:text-2xl">Voices of Resilience</p>
        <p className="text-center">Real stories from warriors and advocates living with Sickle Cell Disease</p>
        <div className="grid grid-cols-1 grid-rows-2 gap-6 items-center justify-center px-3 lg:py-18 lg:mx-auto lg:grid-rows-1 lg:grid-cols-2">
          {
            testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} name={testimonial.name} job={testimonial.job} message={testimonial.message} />
            ))
          }
        </div>
      </section>
      <section className="lg:pt-8 lg:pb-18">
        <div className="bg-primary rounded-2xl w-11/12 text-background py-6 px-3 mx-auto flex flex-col gap-3 items-center justify-center lg:w-10/12 lg:py-12">
          <Megaphone className="bg-on-primary-container h-auto w-auto p-2 rounded-full flex items-center justify-center" />
          <p className="font-bold lg:text-4xl">Help Us Spread the Word</p>
          <p className="text-center lg:w-2/4 lg:py-3">Your voice matters. Whether it is sharing a post, donating, or just learing the facts, every action counts towards a better future.</p>
          <div className="flex justify-cener items-center gap-4">
            <button className="rounded-full bg-background text-primary text-sm px-4 py-2 font-semibold">Share Awareness</button>
            <button className="rounded-full px-4 py-2 text-sm border border-background font-semibold">Donate Now</button>
          </div>
        </div>
      </section>
      <footer className="bg-on-background text-background text-[.5em] flex gap-3 px-3 py-3 lg:px-8 lg:py-8 lg:text-[.7em]">
        <p className="">Sickle Cell Awareness Initiative</p>
        <ul className="mx-auto lg:flex lg:gap-3">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact</li>
        </ul>
        <p>@2025 Awareness. All righys reserved.</p>
      </footer>
    </main>
  );
}

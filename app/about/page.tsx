import Hero from '@/features/about/components/Hero'
export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <div className="">
        <section className="px-3 py-4 flex flex-col">
          <h3 className="text-xl text-center font-bold tracking-wide">More than a <span className="text-primary">diagnosis.</span></h3>
          <p className="text-lg text-left align-middle py-3">Understanding Sickle Cell Disease through human storytelling and clear medical facts. A resource for families, friends, and fighters.</p>
          <div className="flex justify-center gap-6">
            <button className="bg-primary px-6 py-2 rounded-full text-sm font-semibold text-background">Start Learning</button>
            <button className="px-6 py-2 rounded-full text-sm font-semibold border border-on-background text-on-background">Watch Video</button>
          </div>
        </section>
        <section className="px-3 py-8">
          <div>
            <h1 className="font-semibold text-2xl text-center">What is Sickle Cell?</h1>
            <p className="text-md py-2">Sickle Cell Disease(SCD) is a genetic blood disorder that affects the shape of red blood cells. Normal red blood cells are round and flexible, but in SD, some become rigid and shaped like a cresent moon, or sickle. </p>
          </div>
          <div>
            <p>This sections will have some visual displays.</p>
          </div>
          <div className="flex flex-col py-4">
            <div className="py-3 text-center">
              <p className="text-sm text-center font-semibold tracking-wide py-3">PREVENTION AND PLANNING</p>
              <p>Genotype testing is essential.</p>
              <p>Knowing your genotype (AA, AS,SS) is the first step in awareness and responsible family planning.</p>
            </div>
            <button className="bg-primary text-sm text-background rounded-full font-semibold px-3 py-2">Find a testing Center</button>
          </div>
        </section>
        <section className="px-3">
          <div className="flex flex-col">
            <p className="text-sm text-primary text-center font-semibold">What to look for</p>
            <p className="text-xl text-center font-semibold tracking-wide">Common Symptoms</p>
          </div>
          <div className="flex flex-col gap-3 justify-center py-3">
            <div className="rounded-lg px-4 py-3 bg-rose-50">
              <h3 className="text-md font-semibold text-left">Pain Crises</h3>
              <p className="text-sm py-2 text-on-background/70">Periodic episodes of extreme pain, called pain crises, are a major symptom of sickle cell anemia. Pain develops when sickle-shaped reb blood cells block the flow of blood.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
          </div>
          <div className="py-8">
            <h3 className="text-xl text-center font-semibold tracking-wide">Myths vs. Facts</h3>
            <p className="text-sm text-center py-2">Dispelling common misconceptions about the condition.</p>
            <div className="py-4">
              <ul className="flex flex-col gap-4">
                <li className="abt-list-item flex justify-start gap-3 border border-on-background/50 rounded-2xl text-sm px-4 py-2"><span className="text-primary">MYTH</span><p className="text-sm text-left">Sickle Cell is contagious</p></li>
                <li className="abt-list-item flex justify-start gap-3 border border-on-background/50 rounded-2xl text-sm px-4 py-2"><span className="text-primary">MYTH</span><p className="text-sm text-left">People with sickle cell dont live long.</p></li>
                <li className="abt-list-item flex justify-start gap-3 border border-on-background/50 rounded-2xl text-sm px-4 py-2"><span className="text-primary">MYTH</span><p className="text-sm text-left">There is no cure.</p></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

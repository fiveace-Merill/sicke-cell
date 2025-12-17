import { MoveRight, Dna } from "lucide-react"

const infoArray = [
  {
    icon: <Dna size={24} />,
    title: "Genetic Origins",
    description: "Sickle cell disease is an inherited blood disorder. It affects haemoglobin, the molecule in red blood cells that delivers oxygen to cells throughout the body.",
    link: "https://www.health.co.ke",
    text: "Read More"
  },
  {
    icon: <Dna size={24} />,
    title: "Managing Pain",
    description: "Pain crises are a major sysmptom. Learning management strategies and having a supportive care plan is crucial for quality of life.",
    link: "https://www.health.co.ke",
    text: "View resources"
  },
  {
    icon: <Dna size={24} />,
    title: "Trait vs. Disease",
    description: "Millions carry the sickle cell trait without having the disease. Knowing your status is vital for family planning and future health.",
    link: "https://www.health.co.ke",
    text: "Get tested"
  }
]

export default function InfoCard() {
  return (
    <>
      {
        infoArray.map(({ icon, title, description, link, text }) => (
          <div key={title} className="bg-background flex flex-col gap-3 px-3 py-3 rounded-lg shadow-md shadow-background-container lg:max-w-1/3">
            <div className="@container h-12 w-12 bg-primary-container text-on-primary rounded-full aspect-square flex items-center justify-center">{icon}</div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-md">{description}</p>
            <a className="flex gap-3 items-center text-sm text-primary font-semibold" href={link}>{text} <MoveRight /></a>
          </div>
        ))
      }
    </>
  )
}

import { symptoms } from "@/lib/data";

export default function SymptomCard() {
  return (
    <>
      {
        symptoms.map((symptom, idx) => {
          const Icon = symptom.icon
          return (
            <div key={idx} className="px-4 py-3 rounded-4xl bg-gray-50 flex flex-col gap-3 justify-center lg:py-8">
              <div className="w-12 h-12 bg-background text-primary rounded-full flex justify-center items-center aspect-square">
                <Icon size={24} />
              </div>
              <div className="">
                <h3 className="text-md font-semibold text-left">{symptom.symptom}</h3>
                <p className="text-sm py-2 text-on-background/70">{symptom.description}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

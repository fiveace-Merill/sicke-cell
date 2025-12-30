import { Microscope, CogIcon, GroupIcon } from "lucide-react"
import { card, treat_card, title, heading, treat_container, text, test_container } from "@/features/about/styles/styles"
export default function Testing() {
  return (
    <div className="flex flex-col py-8 gap-4 lg:gap-2">
      <div className="lg:px-8">
        <h2 className="text-2xl text-center font-semibold lg:text-left lg:text-4xl">Why Testing Matters</h2>
        <p className="py-2 px-3 text-center text-pretty lg:px-0 lg:max-w-1/2 lg:text-left lg:py-4">Sickle cell status is not just a medical record: it is a tool for life planning. Early testing allows for better management, informed family planning, and specialized care.</p>
      </div>
      <div className={`${test_container}`}>
        <div className={`${card}`}>
          <Microscope className=" bg-rose-50 rounded-full flex items-center justify-center" />
          <h4 className={`${title}`}>Early Detection</h4>
          <p className={`${text}`}>Identify genotype early to start effective care immediately, rducing the risk of severe complications in childhood.</p>
        </div>
        <div className={`${card}`}>
          <CogIcon />
          <h4 className={`${title}`}>Informed Decision</h4>
          <p className={`${text}`}>Understanding your genetic profile to make life choices with confidence, from career paths to lifestyle adjustments.</p>
        </div>
        <div className={`${card}`}>
          <GroupIcon />
          <h4 className={`${title}`}>Family Planning</h4>
          <p className={`${text}`}>Assess hereditary risks and explore options for future generations with genetic counselling support.</p>
        </div>
      </div>
      <div className="bg-gray-50 flex flex-col gap-4 items-center justify-center py-8 md:w-4/6 lg:my-8 lg:py-18 lg:w-full lg:mx-auto lg:flex-row">
        <div className="flex items-center justify-center h-full w-full lg:basis-1/3">
          <span className="flex items-center justify-center border-12 h-[175px] w-[175px] border-primary rounded-full font-extrabold text-4xl">1 in 13</span>
        </div>
        <div className="flex flex-col gap-4 lg:px-8 lg:basis-2/3">
          <h2 className={`${heading} py-1 px-4`}>Understanding the Prevelence</h2>
          <p className="px-4">Approximately <span className="text-gray-900 font-semibold"> 1 in 13 African babies </span>is born with SCD. While SCT is not the disease itself. knowing your status is crucial for future family health and understanding potential rare symptoms.</p>
          <span className="text-primary mx-auto px-8 font-semibold hover:text-primary/50 lg:px-4 lg:mx-0">Read more about Sickle Cell Trait</span>
        </div>
      </div>
      <div className="lg:p-8">
        <h2 className={`${heading} px-4`}>Treatment and Management</h2>
        <p className="px-4 text-center text-balance lg:text-left lg:max-w-4/6">Living with sickle cell requires a holistic approach. Here are four pillars of daily management. </p>
        <div className={`${treat_container} h-full`}>
          <div className={`${treat_card}`}>
            <div className="self-center bg-blue-200 rounded-full flex justify-center items-center mt-2 h-[48px] w-[48px] lg:self-start">
              <Microscope className="text-blue-400" />
            </div>
            <div className="grow lg:basis-2/3">
              <h4 className={`${title}`}>Hydration is Key</h4>
              <p className={`${text} py-2`}>Staying well-hydrated helps keep blood cells round and moving freely. Aim for 8 - 10 glasses of water daily to reduce the risk of pain crises.</p>
            </div>
          </div>
          <div className={`${treat_card}`}>
            <div className="self-center bg-red-200 rounded-full flex justify-center items-center mt-2 h-[48px] w-[48px] lg:self-start">
              <Microscope className="text-red-400" />
            </div>
            <div className="grow lg:basis-2/3">
              <h4 className={`${title}`}>Pain Management</h4>
              <p className={`${text} py-2`}>Develp a plan with your doctor for both acute crises and chronic pain. This may involve heating pads. OTC medications or prescriptions therapies.</p>
            </div>
          </div>
          <div className={`${treat_card}`}>
            <div className="self-center bg-green-200 rounded-full flex justify-center items-center mt-2 h-[48px] w-[48px] lg:self-start">
              <Microscope className="text-green-400" />
            </div>
            <div className="grow lg:basis-2/3">
              <h4 className={`${title}`}>Infection Prevention</h4>
              <p className={`${text} py-2`}>Regular vaccinations and, for children, daily penicillin are vital. Infections can trigger crises, so early treatment of fevers is essential.</p>
            </div>
          </div>
          <div className={`${treat_card}`}>
            <div className="self-center bg-purple-200 rounded-full flex justify-center items-center mt-2 h-[48px] w-[48px] lg:self-start">
              <Microscope className="text-purple-400" />
            </div>
            <div className="grow lg:basis-2/3">
              <h4 className={`${title}`}>Regular Checkups</h4>
              <p className={`${text} py-2`}>Routine visits allow for monitoring of organ health, vision, and bloody counts. Proactive care catches complications before they become emergencies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

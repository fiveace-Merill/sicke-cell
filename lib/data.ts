import { Testimonial, Myth, Symptom } from "@/types"
import { BatteryLow, Cross, Microscope } from "lucide-react"

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    job: "Patient Advocate",
    message: "Living with sickle cell has taught me resilience. The pain is real, but so is the hope. Sharing my story helps others feel less alone in this journey."
  },
  {
    name: "David K.",
    job: "Warrior & Artist",
    message: "Art became my escape during hospital stays. It is important to find your passion and let it drive you forward, despite the challenges."
  },
  {
    name: "Sarah M.",
    job: "Patient Advocate",
    message: "Living with sickle cell has taught me resilience. The pain is real, but so is the hope. Sharing my story helps others feel less alone in this journey."
  }
]

export const myths: Myth[] = [
  {
    myth: "Sickle Cell is Contagious",
    description: "some description on this",
    value: "item-1"

  },
  {
    myth: "People with sickle cell do not live long",
    description: "some description on this",
    value: "item-2"
  },
  {
    myth: "There is no cure",
    description: "some description on this",
    value: "item-3"

  }
]

export const symptoms = [
  {
    icon: Cross,
    symptom: "Pain Crises",
    description: "Periodic episodes of extreme pain, called pain crises, are a major symptom of sickle cell anemia. Pain developes when sickle cell shaped red blodd cells block blood flow."
  },
  {
    icon: BatteryLow,
    symptom: "Fatigue and Anemia",
    description: "Sickle cels break easily and die, leaving you with too few red blood cells. Without enough red blood cells, your body can not get the oxygen it needs to feel energized."
  },
  {
    icon: Microscope,
    symptom: "Frequent Infections",
    description: "Sickle cell can damage the spleen, leaving you more vulnerable to infections. Doctors often give infants and children with sickle cell vaccinations and antibiotics."
  }
]

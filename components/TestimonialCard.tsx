import { Quote } from "lucide-react"
import { Testimonial } from "@/types"

export default function TestimonialCard({ name, job, message }: Testimonial) {
  return (
    <div className="rounded-2xl border border-on-background/10 p-3 lg:max-w-2/3">
      <div className="flex justify-start items-center">
        <div>
          <p>{name}</p>
          <p className="text-primary font-semibold">{job}</p>
        </div>
        <Quote className="ml-auto" stroke="red" fill="red" />
      </div>
      <p>{message}</p>
    </div>
  )
}

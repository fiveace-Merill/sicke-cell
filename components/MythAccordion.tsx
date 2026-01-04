import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { myths } from "@/lib/data"

export default function MythAccordion() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-3" >
        {
          myths.map((myth, idx) => (
            <AccordionItem value={myth.value} key={idx} defaultValue={myth.value} className="abt-list-item flex flex-col justify-start border border-on-background/50 rounded-2xl text-sm px-3">
              <AccordionTrigger><p><span className="text-primary font-bold text-[0.75rem] px-3">MYTH</span>{myth.myth}</p></AccordionTrigger>
              <AccordionContent className="px-3 text-balance">
                <p>{myth.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))
        }

      </Accordion>
    </>
  )
}

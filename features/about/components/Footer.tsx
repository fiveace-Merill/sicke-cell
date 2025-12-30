import { footerlink } from "@/styles/styles"
export default function Footer() {
  return (
    <footer className="flex gap-3 px-2 py-4 text-xs bg-gray-50 text-on-background-container lg:gap-12 lg:px-8 lg:py-8 lg:text-lg">
      <div className="mr-auto">
        <p className="font-semibold">Sicke Cell Awareness</p>
        <p className="text-xs text-on-background/70 py-2 lg:text-md">Dedicated to educating the world and support those infected by Sickle Cell Disease.</p>
      </div>
      <div>
        <p className="font-semibold">Learn</p>
        <ul className="flex flex-col gap-2 text-on-background/70 py-2 lg:text-md">
          <li className={`${footerlink}`}>Genetics</li>
          <li className={`${footerlink}`}>Symptoms</li>
          <li className={`${footerlink}`}>Treatments</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Support</p>
        <ul className="flex flex-col gap-2 text-on-background/70 py-2 lg:text-md">
          <li className={`${footerlink}`}>Find a doctor</li>
          <li className={`${footerlink}`}>Community Groups</li>
          <li className={`${footerlink}`}>Donate</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Connect</p>
        <p>Some Logos</p>
      </div>
    </footer>
  )
}


export default function Footer() {
  return (
    <footer className="flex gap-3 px-2 text-xs">
      <div className="mr-auto">
        <p className="font-semibold">Sicke Cell Awareness</p>
        <p className="text-xs text-on-background/70 py-2">Dedicated to educating the world and support those infected by Sickle Cell Disease.</p>
      </div>
      <div>
        <p className="font-semibold">Learn</p>
        <ul className="flex flex-col gap-2 text-on-background/70 py-2">
          <li>Genetics</li>
          <li>Symptoms</li>
          <li>Treatments</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Support</p>
        <ul className="flex flex-col gap-2 text-on-background/70 py-2">
          <li>Find a doctor</li>
          <li>Community Groups</li>
          <li>Donate</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Connect</p>
        <p>Some Logos</p>
      </div>
    </footer>
  )
}

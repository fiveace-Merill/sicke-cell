
export default function MapCard() {
  return (
    <div className="flex w-full h-full mx-auto gap-8">
      <div className="basis-2/3 flex flex-col gap-6">
        <input type="search" placeholder="search" className="border rounded-xl px-3 py-1 w-2/6" />
        <div className="bg-gray-50 rounded-3xl basis-11/12 flex-inintial p-2">
        </div>
      </div>
      <div>
        <p className="flex flex-col gap-3"><span>Filter by county: </span><input name="location" type="text" list="location" className="inline-block border border-gray-50 px-2 rounded-md in-active:border-gray-50 active:border-gray-100" /></p>
        <datalist id="location" className="">
          <option value="Nairobi" className="" />
          <option value="Kiambu" />
          <option value="Nyeri" />
          <option value="Muranga" />
          <option value="Migori" />
          <option value="Vihiga" />
          <option value="Kakamega" />
          <option value="Isiolo" />
          <option value="Nakuru" />
          <option value="Narok" />
          <option value="Kilifi" />
        </datalist>
      </div>
    </div>
  )
}

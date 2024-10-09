import { NavigatorSection } from "./navigator/NavigatorSection"

export const Aside = () => {
  return (
    <aside className="bg-[#4D44B5] w-[250px] h-full py-10 pl-6 flex flex-col flex-none items-end gap-10">
      <div className="flex items-center gap-2 w-full">
        <p className="w-10 h-10 rounded-xl font-bold text-gray-50 text-2xl grid place-content-center bg-[#FB7D5B]">A</p>
        <p className=" text-2xl font-bold text-gray-50">Akademi</p>
      </div>
      <NavigatorSection />
    </aside>
  )
}
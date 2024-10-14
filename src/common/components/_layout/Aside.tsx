import { SchoolIcon } from "../icons/SchoolIcon"
import { SettingsIcon } from "../icons/SettingsIcon"
import { LinkButton } from "./navigator/LinkButton"
import { NavigatorSection } from "./navigator/NavigatorSection"

export const Aside = () => {
  return (
    <aside className="row-start-1 row-end-4 bg-[--bg-primary] w-[250px] h-full py-10 pl-6 flex flex-col justify-between flex-none items-end gap-10">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-2 w-full">
          <p className="w-10 h-10 rounded-xl font-bold text-gray-50 text-2xl grid place-content-center bg-[#FB7D5B]">A</p>
          <p className=" text-2xl font-bold text-gray-50">Akademi</p>
        </div>
        <NavigatorSection />
      </div>
      <nav className="w-full flex flex-col gap-2">
        <LinkButton icon={<SchoolIcon />} label="Escola" href={'/school'} />
        <LinkButton icon={<SettingsIcon />} label="Configurações" href={'/settings'} />
      </nav>
    </aside>
  )
}
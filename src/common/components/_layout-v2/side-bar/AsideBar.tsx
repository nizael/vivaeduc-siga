import { BookIcon } from "../../icons/BookIcon"
import { SettingsIcon } from "../../icons/SettingsIcon"
import { LinkButton } from "./LinkButton"
import { NavigatorSection } from "./NavigatorSection"
import { Logout } from "./Logout"

export const AsideBar = () => {
  return (
    <aside className="bg-primary flex flex-col items-center max-[769px]:hidden overflow-x-auto py-2">
      <NavigatorSection />
      <nav className="w-full items-center flex flex-col gap-2">
        <LinkButton icon={<BookIcon />} label="Escola" href={'/school'} />
        <LinkButton icon={<SettingsIcon />} label="Configurações" href={'/settings'} />
        <Logout />
      </nav>
    </aside>
  )
}
import { BookIcon } from "../../icons/BookIcon"
import { SettingsIcon } from "../../icons/SettingsIcon"
import { LinkButton } from "./LinkButton"
import { NavigatorSection } from "./NavigatorSection"
import { Logout } from "./Logout"

export const AsideBar = () => {
  return (
    <aside className="bg-primary flex flex-col items-center max-[769px]:hidden  py-2">
      <NavigatorSection />
    </aside>
  )
}
import { PropsWithChildren } from "react"
import { MenuMobile } from "./menu-mobile/MenuMobile"
import { Header } from "./headers/Header"
import { guardian } from "../../../di/dependencyInjection"
import { AsideBar } from "./side-bar/AsideBar"
import { ProfileMobile } from "./profile/ProfileMobile"


export const LayoutApp = async ({ children }: PropsWithChildren) => {
  const authData = await guardian.authenticate()
  return (
    <>
      <MenuMobile />
      <ProfileMobile />
      <div className="grid grid-cols-[48px,1fr] max-[769px]:grid-cols-[1fr] grid-rows-[48px,1fr]  h-full">
        <Header authData={authData} />
        <AsideBar />
        <main className="overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  )
}

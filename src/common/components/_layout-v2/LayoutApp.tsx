import { PropsWithChildren } from "react"
import { MenuMobile } from "./menu-mobile/MenuMobile"
import { Header } from "./headers/Header"
import { guardian } from "../../../di/dependencyInjection"
import { AsideBar } from "./side-bar/AsideBar"
import { ProfileMobile } from "./profile/ProfileMobile"
import Head from "next/head"


export const LayoutApp = async ({ children }: PropsWithChildren) => {
  const authData = await guardian.authenticate()
  return (
    <>
      <Head>
        <title>Gestão Escolar</title>
        <link rel="icon" href="/svg/logo_48.svg" type="image/x-icon" />
        <meta name="description" content="Sistema de gestão escolar completo com funcionalidades de controle acadêmico, financeiro, RH e mais." />
        <meta name="keywords" content="sistema escolar, gestão escolar, controle acadêmico, sistema de escola" />
        <meta name="robots" content="index, follow" />
      </Head>
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
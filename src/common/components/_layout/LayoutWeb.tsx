import { PropsWithChildren, ReactNode } from "react"
import { Aside } from "./Aside"
import { Header } from "./Header"
import { guardian } from "../../../di/dependencyInjection"
import { IUserData } from "../../../app/(auth)/stores/useAuthData"

type ILayoutWebProps = PropsWithChildren & {
  titlePage: ReactNode
}
export const LayoutWeb = async ({ titlePage, children }: ILayoutWebProps) => {
  const authData ={} as IUserData // await guardian.authenticate()
  return (
    <div className="grid grid-cols-[250px,1fr] grid-rows-[66px,1fr]  w-full h-full">
      <Aside />
      <Header titlePage={titlePage} authData={authData} />
      <main className="flex flex-col gap-4 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  )
}
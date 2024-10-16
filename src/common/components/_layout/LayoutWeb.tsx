import { PropsWithChildren } from "react"
import { Aside } from "./Aside"
import { Header } from "./Header"
import { authenticate } from "../../../di/dependencyInjection"

type ILayoutWebProps = PropsWithChildren & {
  titlePage: string
}
export const LayoutWeb = async ({ titlePage, children }: ILayoutWebProps) => {
  const authData = await authenticate()
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
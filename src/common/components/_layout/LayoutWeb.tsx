import { PropsWithChildren } from "react"
import { Aside } from "./Aside"
import { Header } from "./Header"

type ILayoutWebProps = PropsWithChildren & {
  titlePage: string
}
export const LayoutWeb = ({ titlePage, children }: ILayoutWebProps) => {
  return (
    <div className="grid grid-cols-[250px,1fr] grid-rows-[66px,1fr]  w-full h-full">
      <Aside />
      <Header titlePage={titlePage} />
      <main className="flex flex-col gap-4 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  )
}
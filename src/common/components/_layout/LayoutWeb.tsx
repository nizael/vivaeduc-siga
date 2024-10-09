import { PropsWithChildren } from "react"
import { Aside } from "./Aside"
import { Header } from "./Header"

type ILayoutWebProps = PropsWithChildren & {
  titlePage: string
}
export const LayoutWeb = ({ titlePage, children }: ILayoutWebProps) => {
  return (
    <div className="flex w-full h-full">
      <Aside />
      <div className="flex flex-col gap-2 grow overflow-auto">
        <Header titlePage={titlePage} />
        <main className="p-4 flex flex-col gap-4 h-full overflow-y-auto">
          {children}
        </main>
        {/* 
        */}
      </div>
    </div>
  )
}
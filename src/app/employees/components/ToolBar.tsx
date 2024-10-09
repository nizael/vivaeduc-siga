import { DropdownIcon } from "@/common/common/components/icons/DropdownIcon"
import { SearchIcon } from "@/common/common/components/icons/SearchIcon"
import Link from "next/link"

export const ToolBar = () => {
  return (
    <section className="flex items-center justify-between">
      <button className="flex gap-2 px-4 py-1 bg-gray-50 max-w-96 w-full  h-[40px] items-center flex-none rounded-full text-[#4D44B5]"><SearchIcon /><span className="text-slate-500">Pesquisar por...</span></button>
      <div className="flex items-center gap-4">
        <button className="border border-[#4D44B5] text-[#4D44B5] rounded-full h-[40px] px-4  flex items-center gap-1">Mais recentes <DropdownIcon /></button>
        <Link href={'/'} className="border bg-[#4D44B5] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo funcionário</Link>
      </div>
    </section>
  )
}
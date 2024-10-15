import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { SearchIcon } from "@/components/icons/SearchIcon"
import Link from "next/link"

export const ToolBar = () => {
  return (
    <section className="flex items-center justify-between">
      <button className="flex gap-2 px-4 py-1 bg-gray-50 max-w-96 w-full  h-[40px] items-center flex-none rounded-full text-[--text-primary]"><SearchIcon /><span className="text-slate-500">Pesquisar por...</span></button>
      <div className="flex items-center gap-4">
        <button className="border border-[--bg-primary] text-[--text-primary] rounded-full h-[40px] px-4 flex justify-center items-center gap-2">Mais recentes <DropdownIcon /></button>
        <Link href={'/academic/subjects'} className="border bg-[--bg-primary] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Nova disciplina</Link>
      </div>
    </section>
  )
}
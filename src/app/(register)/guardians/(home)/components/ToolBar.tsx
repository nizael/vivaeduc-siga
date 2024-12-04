'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { SearchIcon } from "@/components/icons/SearchIcon"
import Link from "next/link"
import { useSearchModalStore } from "../../stores/useSearchModalStore"

export const ToolBar = () => {
    const { onOpen } = useSearchModalStore()
  return (
    <section className="flex items-center justify-between max-sm:flex-col gap-4">
      <div className="flex grow max-sm:w-full">
        <button onClick={onOpen} className="flex gap-2 px-4 py-1 bg-gray-50 sm:max-w-96 w-full  h-[40px] items-center flex-none rounded-full text-[--text-primary]"><SearchIcon /><span className="text-slate-500">Pesquisar por...</span></button>
      </div>
      <div className="flex items-center gap-4 max-sm:justify-between max-sm:w-full">
        {/* <button className="border border-[--bg-primary] text-[--text-primary] rounded-full h-[40px] px-4 max-sm:text-sm flex items-center gap-1">Mais recentes <DropdownIcon /></button> */}
        <Link href={'/guardians/create'} className="border bg-primary text-gray-50 max-sm:text-sm rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo responsável</Link>
      </div>
    </section>
  )
}
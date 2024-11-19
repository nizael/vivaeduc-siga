'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { SearchIcon } from "@/components/icons/SearchIcon"
import { useCurriculumStore } from "../../stores/useCurriculumStore"

export const ToolBar = () => {
  const { onOpen } = useCurriculumStore()
  return (
    <section className="flex items-center justify-between max-sm:flex-col gap-4">
      <div className="flex grow max-sm:w-full">
        {/* <button className="flex gap-2 px-4 py-1 bg-gray-50 sm:max-w-96 w-full  h-[40px] items-center flex-none rounded-full text-[--text-primary]"><SearchIcon /><span className="text-slate-500">Pesquisar por...</span></button> */}
      </div>
      <div className="flex items-center gap-4 max-sm:justify-between max-sm:w-full">
        <button onClick={onOpen} className="border bg-[--bg-primary] text-gray-50 rounded-full  max-sm:w-full  max-sm:justify-center h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Nova grade currícular</button>
      </div>
    </section>
  )
}
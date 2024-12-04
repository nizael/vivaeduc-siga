'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { SearchIcon } from "@/components/icons/SearchIcon"
import Link from "next/link"
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"
import { useSearchModalStore } from "../../stores/useSearchModalStore"
// import { guardian } from "../../../../di/dependencyInjection"

export const ToolBar = () => {
  // const isPermission = await guardian.checkPermission('EMPLOYEE_DATABASE_WRITE')
  const { setIsLoading } = useLoadingSpinnerStore()
  const { onOpen } = useSearchModalStore()
  return (
    <section className="flex items-center justify-between max-sm:flex-col gap-4">
      <div className="flex grow max-sm:w-full">
        <button onClick={onOpen} className="flex gap-2 px-4 py-1 bg-gray-50 sm:max-w-96 w-full  h-[40px] items-center flex-none rounded-full text-[--text-primary]"><SearchIcon /><span className="text-slate-500">Pesquisar por...</span></button>
      </div>
      <div className="flex items-center gap-4 max-sm:justify-between max-sm:w-full">
        <button className="border border-[--bg-primary] text-[--text-primary] rounded-full max-sm:text-sm h-[40px] px-4  flex items-center gap-1">Mais recentes <DropdownIcon /></button>
        <Link onClick={() => setIsLoading(true)} href={'/employees/create'} className="border bg-primary max-sm:text-sm text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo funcionário</Link>
      </div>
    </section>
  )
}
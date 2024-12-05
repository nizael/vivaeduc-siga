'use client'
import { SearchIcon } from "@/components/icons/SearchIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { useEnrollmentRequirementsStore } from "../../../stores/useEnrollmentRequirementStore"
import { useEnrollmentRequirementModal } from "../../../stores/useEnrollmentRequirementModal"
import Link from "next/link"

export const ToolBar = () => {
  const { toggleSequence, sequence } = useEnrollmentRequirementsStore()
  const { onOpen } = useEnrollmentRequirementModal()

  return (
    <section className="flex items-center justify-between max-sm:flex-col gap-4">
      <div className="flex grow max-sm:w-full">
        <button className="flex gap-2 px-4 py-1 bg-gray-50 sm:max-w-96 w-full  h-[40px] items-center flex-none rounded-full text-[--text-primary]"><SearchIcon /><span className="text-slate-500">Pesquisar por...</span></button>
      </div>
      <div className="flex items-center gap-4 max-sm:justify-between max-sm:w-full">
        <button onClick={toggleSequence} className="border border-[--bg-primary] text-[--text-primary] rounded-full h-[40px] px-4 flex justify-center items-center gap-2">{sequence === 'desc' ? 'Mais recentes' : 'Mais antigo'} <DropdownIcon /></button>
        <Link href={'/settings/contracts/create'}  className="border bg-[--bg-primary] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo contrato</Link>
      </div>
    </section>
  )
}
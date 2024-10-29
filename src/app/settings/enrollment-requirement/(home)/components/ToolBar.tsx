'use client'
import { SearchIcon } from "@/components/icons/SearchIcon"
import Link from "next/link"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { useEnrollmentRequirementsStore } from "../../../stores/useEnrollmentRequirementStore"
import { useEnrollmentRequirementModal } from "../../../stores/useEnrollmentRequirementModal"

export const ToolBar = () => {
  const { toggleSequence, sequence } = useEnrollmentRequirementsStore()
  const { onOpen } = useEnrollmentRequirementModal()

  return (
    <section className="flex items-center justify-between">
      <button className="flex gap-2 px-4 py-1 border bg-gray-50 max-w-96 w-full  h-[40px] items-center flex-none rounded-full text-[--text-primary]"><SearchIcon /><span className="text-gray-500">Pesquisar por...</span></button>
      <div className="flex items-center gap-4">
        <button onClick={toggleSequence} className="border border-[--bg-primary] text-[--text-primary] rounded-full h-[40px] px-4 flex justify-center items-center gap-2">{sequence === 'desc' ? 'Mais recentes' : 'Mais antigo'} <DropdownIcon /></button>
        <button onClick={onOpen} className="border bg-[--bg-primary] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo requisito</button>
      </div>
    </section>
  )
}
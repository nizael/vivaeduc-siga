'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import Link from "next/link"
import { useCalendarStore } from "../../stores/useCalendarStore"

export const ToolBar = () => {
  const {onOpen} = useCalendarStore()
  return (
    <section className="flex items-center justify-end">
      <div className="flex items-center gap-4 max-sm:justify-between max-sm:w-full">
        <button className="border border-[--bg-primary] text-[--text-primary] rounded-full h-[40px] px-4 flex items-center gap-2">Janeiro <DropdownIcon /></button>
        <button onClick={onOpen} className="border bg-[--bg-primary] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo evento</button>
      </div>
    </section>
  )
}
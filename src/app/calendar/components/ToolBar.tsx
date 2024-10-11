import { DropdownIcon } from "@/components/icons/DropdownIcon"
import Link from "next/link"

export const ToolBar = () => {
  return (
    <section className="flex items-center justify-end">
      <div className="flex items-center gap-4">
        <button className="border border-[--bg-primary] text-[--text-primary] rounded-full h-[40px] px-4 flex items-center gap-2">Janeiro <DropdownIcon /></button>
        {/* <button className="border border-[--bg-primary] text-[--text-primary] rounded-full h-[40px] px-4 flex items-center gap-2">2024 <DropdownIcon /></button> */}
        <Link href={'/calendar'} className="border bg-[--bg-primary] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo evento</Link>
      </div>
    </section>
  )
}
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import Link from "next/link"

export const ToolBar = () => {
  return (
    <section className="flex items-center justify-end">
      <div className="flex items-center gap-4">
        <button className="border border-[#4D44B5] text-[#4D44B5] rounded-full h-[40px] px-4 flex items-center gap-2">Janeiro <DropdownIcon /></button>
        {/* <button className="border border-[#4D44B5] text-[#4D44B5] rounded-full h-[40px] px-4 flex items-center gap-2">2024 <DropdownIcon /></button> */}
        <Link href={'/calender'} className="border bg-[#4D44B5] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo evento</Link>
      </div>
    </section>
  )
}
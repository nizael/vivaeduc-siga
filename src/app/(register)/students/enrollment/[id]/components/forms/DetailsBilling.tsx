import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"

export const DetailsBilling = ()=>{
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
    <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><ClassroomIcon /> Detalhes da cobrança</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
    <div className="grid grid-cols-4 gap-4 p-4 w-full">

    </div>
  </details>
  )
}
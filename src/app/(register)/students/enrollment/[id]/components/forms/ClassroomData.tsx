import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"

export const ClassroomData = ()=>{
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
    <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><ClassroomIcon /> Turma</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
    <div className="grid grid-cols-4 gap-4 p-4 w-full">
      <CustomSelect options={[]} label="Período letivo" />
      <CustomSelect options={[]} label="Curso" />
      <CustomSelect options={[]} label="Série" />
      <CustomSelect options={[]} label="Turma" />
    </div>
  </details>
  )
}
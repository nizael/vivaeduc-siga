import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { FileTextIcon } from "@/components/icons/FileTextIcon"

export const DocumentData = () => {
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><FileTextIcon /> Documentos</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
      <div className="flex flex-col p-4 w-full">
        <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
          <p className="text-sm font-semibold">3 fotos 3x4 do(a) aluno(a)*</p>
          <CustomSelect options={[]} className="" />
        </div>
        <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
          <p className="text-sm font-semibold">Certidão de Nascimento do(a) aluno(a) - cópia*</p>
          <CustomSelect options={[]} className="" />
        </div>
        <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
          <p className="text-sm font-semibold">Comprovante de residência do(a) aluno(a) - cópia*</p>
          <CustomSelect options={[]} className="" />
        </div>
        <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
          <p className="text-sm font-semibold">Histórico*</p>
          <CustomSelect options={[]} className="" />
        </div>
        <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
          <p className="text-sm font-semibold">Ressalva*</p>
          <CustomSelect options={[]} className="" />
        </div>
        <div className="grid grid-cols-[1fr,200px,60px] py-1  gap-4 border-b items-center text-[--text-primary]">
          <p className="text-sm font-semibold">RG e CPF do Resp. Financeiro*</p>
          <CustomSelect options={[]} className="" />
        </div>
      </div>
    </details>

  )
}
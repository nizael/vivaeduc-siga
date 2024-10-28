import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { FileTextIcon } from "@/components/icons/FileTextIcon"
import { DocumentItem } from "./DocumentItem"

const documentStatus = [
  { value: 'delivered', label: 'Entregue' },
  { value: 'pending', label: 'Pendente' },
]


export const DocumentData = () => {
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><FileTextIcon /> Documentos</span>
        <DotsIcon />
        <span className="grid w-full place-content-end"><DropdownIcon /></span>
      </summary>
      <div className="flex flex-col p-4 w-full">
        <DocumentItem options={documentStatus} label="3 fotos 3x4 do(a) aluno(a)" name="foto" required/>
        <DocumentItem options={documentStatus} label="Certidão de Nascimento do(a) aluno(a) - cópia" name="foto" required/>
        <DocumentItem options={documentStatus} label="Comprovante de residência do(a) aluno(a) - cópia" name="foto" required/>
        <DocumentItem options={documentStatus} label="Histórico" name="foto" required/>
        <DocumentItem options={documentStatus} label="Ressalva" name="foto" required/>
        <DocumentItem options={documentStatus} label="RG e CPF do Resp. Financeiro" name="foto" required/>
      </div>
    </details>

  )
}
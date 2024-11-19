import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { LoginIcon } from "@/components/icons/LoginIcon"
import { InputText } from "@/components/inputs/InputText"

export const SecurityForm = () => {
  return (
    <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
      <summary className="px-4 py-2 flex justify-between border-b  text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LoginIcon />Dados e login</span>
        <DropdownIcon className="w-5" />
      </summary>
      <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
        <InputText label="Usuário" name="username" />
        <InputText type="password" label="Senha" name="password" />
      </div>
    </details>
  )
}
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { SearchIcon } from "@/components/icons/SearchIcon"
import { InputText } from "@/components/inputs/InputText"

export const AddressForm = () => {
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="px-4 py-2 flex justify-between border-b  text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço</span>
        <DropdownIcon className="w-5" />
      </summary>
      <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
        <div className="flex items-end gap-1 justify-between">
          <InputText required label="CEP *" name="postalCode" />
          <button className="w-[40px] h-[40px] grid place-content-center text-gray-50 rounded-lg bg-[--bg-primary]"><SearchIcon /></button>
        </div>
        <div className="md:col-start-2 md:col-end-4">
          <InputText required label="Logradouro *" name="street" />
        </div>
        <InputText required label="Número *" name="number" />
        <InputText required label="Bairro *" name="neighborhood" />
        <InputText required label="Cidade *" name="city" />
        <InputText required label="UF *" name="state" />
        <InputText label="Complemento" name="complement" />
      </div>
    </details>
  )
}
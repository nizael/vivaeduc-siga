import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { SearchIcon } from "@/components/icons/SearchIcon"
import { InputText } from "@/components/inputs/InputText"

export const AddressData = ()=>{
  return(
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
    <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="flex items-end gap-1 justify-between">
        <InputText required label="CEP *" name="postalCode" />
        <button className="w-[40px] h-[40px] grid place-content-center text-gray-50 rounded-lg bg-[--bg-primary]"><SearchIcon /></button>
      </div>
      <InputText required label="Número *" name="number" />
      <div className="col-start-3 col-end-5">
        <InputText required label="Logradouro *" name="street" />
      </div>
      <InputText required label="Bairro *" name="neighborhood" />
      <InputText required label="Cidade *" name="city" />
      <InputText required label="UF *" name="state" />
      <InputText label="Complemento" name="complement" />
    </div>
  </details>
  )
}
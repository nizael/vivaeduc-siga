import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { DiscountIcon } from "@/components/icons/DiscountIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { InputText } from "@/components/inputs/InputText"
import { discountOptions, discountTypeOptions } from "@/configs/discount"


export const DiscountData = ()=>{
  return(
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
    <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><DiscountIcon /> Desconto</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
    <div className="p-4 flex flex-col gap-4 ">
      <div className="grid grid-cols-4 gap-4 w-full">
        <CustomSelect options={discountOptions} label="Nome do desconto" />
        <CustomSelect options={discountTypeOptions} label="Tipo" position="top" />
        <InputText type="number" label="Valor" />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        <InputText type="date" label="Data inicial" />
        <InputText type="date" label="Data final" />
      </div>
    </div>

  </details>
  )
}
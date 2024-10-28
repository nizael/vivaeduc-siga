'use client'
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { DiscountIcon } from "@/components/icons/DiscountIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { InputText } from "@/components/inputs/InputText"
import { discountOptions, discountTypeOptions } from "@/configs/discount"
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"
import { useEffect, useState } from "react"


export const DiscountData = () => {
  const { setDiscountType, setDiscountValue, discountType, discountValue } = useEnrollmentStore()
  const [discountName, setDiscountName] = useState('')

  useEffect(() => {
    if (discountName === 'FULL') {
      setDiscountType('PERCENTAGE')
      setDiscountValue(100)
    }
  }, [discountName])

  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><DiscountIcon /> Desconto</span>
        <DotsIcon />
        <span className="grid w-full place-content-end"><DropdownIcon /></span>
      </summary>
      <div className="p-4 flex flex-col gap-4 ">
        <div className="grid grid-cols-4 gap-4 w-full">
          <CustomSelect options={discountOptions} label="Nome do desconto" onChange={evt => setDiscountName(evt.currentTarget.value)} />
          <CustomSelect disabled={discountName === 'FULL'} initialValue={discountTypeOptions.find(discountTypeOption => discountTypeOption.value === discountType)} options={discountTypeOptions} label="Tipo" position="top" onChange={evt => setDiscountType(evt.currentTarget.value as 'PERCENTAGE' | 'VALUE')} />
          <InputText disabled={discountName === 'FULL'} value={discountValue?.toString()} type="number" label="Valor" onChange={evt => setDiscountValue(Number(evt.currentTarget.value))} />
        </div>
        <div className="grid grid-cols-4 gap-4 w-full">
          <InputText type="date" label="Data inicial" />
          <InputText type="date" label="Data final" />
        </div>
      </div>

    </details>
  )
}
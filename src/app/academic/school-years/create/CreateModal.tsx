'use client'
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { InputText } from "@/components/inputs/InputText"
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useState } from "react"
import { useSchoolYearCreateModalStore } from "../stores/useSchoolYearCreateModal"
import { schoolYearCreate } from "@/services/school-year/schoolYearCreate"
import { useSchoolYearStore } from "../stores/useSchoolYearStore"

export const SchoolYearCreateModal = () => {
  const { isOpen, onClose } = useSchoolYearCreateModalStore()
  const { pushSchoolYear } = useSchoolYearStore()
  

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Novo Período</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action={async formData => {
          const { data, status } = await schoolYearCreate(formData)
          if (status === 201) {
            console.log('=== data ', data)
            pushSchoolYear(data)
            onClose()
          }
        }} className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-4 gap-4 w-full">
            <InputText required label="Código" name="code" />
            <div className="col-start-2 col-end-5">
              <InputText required label="Nome *" name="name" />
            </div>
            <div className="col-start-1 col-end-3">
              <InputText required type="date" label="Início" name="startDate" />
            </div>
            <div className="col-start-3 col-end-5">
              <InputText required type="date" label="Final" name="endDate" />
            </div>
            <div className="col-start-1 col-end-3">
              <InputText required type="date" label="Conclusão" name="yearCompletion" />
            </div>
            <div className="col-start-3 col-end-5">
              <InputText type="number" label="Dias letivos" name="schoolDays" />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <button type="button" onClick={onClose} className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
            <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
          </div>
        </form>
      </div>
    </ModalOverlay>
  )
}
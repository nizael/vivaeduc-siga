'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useSubjectStore } from "../stores/useSubjectStore"
import { bnccCodeOptions } from "@/configs/bnccCode"
import { useUpdateSubjectStore } from "../stores/useUpdateSubjectStore"
import { InputEdit } from "@/components/inputs/InputEdit"
import { FieldData } from "./components/field-data/FieldData"
import { SelectEdit } from "@/components/selects/SelectEdit"
import { useEffect, useState } from "react"
import { ISubject } from "@/services/subject/ISubject"
import { subjectUpdate } from "@/services/subject/subjectUpdate"

export const UpdateSubject = () => {
  const { isOpen, onClose, subjectUpdateId } = useUpdateSubjectStore()
  const { subjectViews,  updateSubject} = useSubjectStore()
  const [subject, setSubject] = useState<ISubject>()

  useEffect(() => {
    if (isOpen) {
      const subject = subjectViews?.find(sbj => sbj.id === subjectUpdateId)
      setSubject(subject)
    }
  }, [isOpen, subjectViews])

  async function handleUpdateSubject(evt: React.FormEvent<HTMLFormElement>, field: string) {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const value = formData.get(field)?.toString()
    if (value && subject) {
      const data = { [`${field}`]: value }
      const result = await subjectUpdate(data, subject.id)
      if (result.status === 200) updateSubject({ [`${field}`]: value }, subject.id )
    }
  }

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-screen-md w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Editar Disciplina</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <div className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-4 gap-4 w-full">
            <InputEdit defaultValue={subject?.code} name="code" onSubmit={evt => handleUpdateSubject(evt, 'code')} >
              <FieldData field="Código" value={subject?.code || '-'} />
            </InputEdit>
            <div className="col-start-1 col-end-5">
              <InputEdit defaultValue={subject?.name}  name="name" onSubmit={evt => handleUpdateSubject(evt, 'name')} >
                <FieldData field="Nome" value={subject?.name || '-'} />
              </InputEdit>
            </div>
            <InputEdit defaultValue={subject?.educacenso} name="educacenso" onSubmit={evt => handleUpdateSubject(evt, 'name')} >
              <FieldData field="Educacenso" value={subject?.educacenso || '-'} />
            </InputEdit>
            <SelectEdit defaultValue={subject?.bncc} onSubmit={evt => handleUpdateSubject(evt, 'bncc')} name="bncc" options={bnccCodeOptions}  >
              <FieldData field="BNCC" value={subject?.bncc || '-'} />
            </SelectEdit>
            <div className="col-start-1 col-end-5">
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  )
}
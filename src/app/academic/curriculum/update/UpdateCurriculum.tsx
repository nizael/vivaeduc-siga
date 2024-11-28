'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useUpdateCurriculum } from "../stores/useUpdateCurriculum"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { useEffect, useState } from "react"
import { listAllTeachers } from "@/services/employee/employeeGet"
import { IEmployee } from "@/services/employee/IEmployee"
import { useCurriculumStore } from "../stores/useCurriculumStore"
import { curriculumSubjectUpdate } from "@/services/curriculum-subject/curriculumSubjectUpdate"

export const UpdateCurriculum = () => {
  const { isOpen, onClose, currentCurriculum } = useUpdateCurriculum()
  const [employeeId, setEmployeeId] = useState<string>('')
  const { updateTeacher, listTeachers } = useCurriculumStore()

  const handleUpdateTeacher = () => {
    if (currentCurriculum) {
      updateTeacher(
        currentCurriculum.curriculumIndex,
        currentCurriculum.subjectIndex,
        { id: employeeId, name: listTeachers?.find(employee => employee.id === employeeId)?.name || '' }
      )
      onClose()
    }
  }

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <form action={async formData => {
        const employeeId = formData.get('employeeId')?.toString()
        const curriculumSubjectId = currentCurriculum?.curriculumSubjectId
        if (curriculumSubjectId) {
          const { data, status } = await curriculumSubjectUpdate(curriculumSubjectId, { employeeId })
          if (status === 200) handleUpdateTeacher()
        }
      }} className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Alterar professor</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <div className="p-4 flex flex-col gap-4" >
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm text-[--text-primary]">Disciplina</p>
            <p>{currentCurriculum?.subjectsName}</p>
          </div>
          <CustomSelect
            name="employeeId"
            options={listTeachers?.map(employee => ({ label: employee.name, value: employee.id })) || []}
            label="Professor"
            onChange={evt => setEmployeeId(evt.currentTarget.value)}
          />
        </div>
        <div className="p-4 w-full flex items-center gap-4 justify-end" >
          <button type="button" onClick={onClose} className="rounded-md bg-primary text-gray-50 px-4 py-2">Cancelar</button>
          <button type="submit" className={` bg-primary rounded-md text-gray-50 px-4 py-2`}>Salvar</button>
        </div>
      </form>
    </ModalOverlay >
  )
}
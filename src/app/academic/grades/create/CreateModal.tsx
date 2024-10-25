'use client'
import { InputText } from "@/components/inputs/InputText"
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { courseCreate } from "@/services/course/courseCreate"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { modalityCourseOptions } from "@/configs/modalityCourse"
import { useGradeCreateModalStore } from "../stores/useGradeCreateModal"
import { useGradeStore } from "../stores/useGradeStore"
import { useEffect, useState } from "react"
import { courseListAll } from "@/services/course/courseListAll"
import { ICourse } from "@/services/course/ICourse"
import { gradeCreate } from "@/services/grade/gradeCreate"

export const GradeCreateModal = () => {
  const { isOpen, onClose } = useGradeCreateModalStore()
  const { pushGrade } = useGradeStore()
  const [courses, setCourses] = useState<ICourse[]>([])

  useEffect(() => {
    (async () => {
      const { data, status } = await courseListAll()
      if (status === 200 && data) setCourses(data)
    })()
  }, [])

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Nova Série</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action={async formData => {
          const { data, status } = await gradeCreate(formData)
          if (status === 201) {
            pushGrade(data)
            onClose()
          }
        }} className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-4 gap-4 w-full">
            <InputText required label="Código" name="code" />
            <div className="col-start-2 col-end-5">
              <InputText required label="Nome *" name="name" />
            </div>
            <div className="col-start-1 col-end-5">
              <div className="flex flex-col gap-2 w-full">
                <span className=" text-[--text-primary] font-semibold ">Tipo de avaliação</span>
                <div className="border border-[#C1BBEB] bg-white rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary] flex items-center gap-2" >
                  <label htmlFor="report" className="flex items-center gap-1">
                    <input value="REPORT" id="report" type="radio" name="typeAssessment" />
                    Relatório
                  </label>
                  <label htmlFor="grade" className="flex items-center gap-1">
                    <input value="GRADE" id="garde" type="radio" name="typeAssessment" />
                    Nota
                  </label>
                  <label htmlFor="goal" className="flex items-center gap-1">
                    <input value="GOAL" type="radio" id="goal" name="typeAssessment" />
                    Meta
                  </label>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-3">
              <InputText label="Educacenso" name="educacenso" />
            </div>
            <div className="col-start-3 col-end-5">
              <CustomSelect required options={courses?.map(course => ({ label: course.name, value: course.id }))} onChange={() => ({})} label="Curso" name="courseId" />
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
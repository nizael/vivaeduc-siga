'use client'
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { InputText } from "@/components/inputs/InputText"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { paymentPlanCreate } from "@/services/paymentPlan/paymentPlanCreate"
import { useEffect, useState } from "react"
import { schoolYearListAll } from "@/services/school-year/schoolYearListAll"
import { courseListAll } from "@/services/course/courseListAll"
import { ISchoolYear } from "@/services/school-year/ISchoolYear"
import { ICourse } from "@/services/course/ICourse"
import { methodReceiptOptions } from "@/configs/methodReceipt"
import { useEnrollmentRequirementModal } from "../../stores/useEnrollmentRequirementModal"
import { useEnrollmentRequirementsStore } from "../../stores/useEnrollmentRequirementStore"
import { gradeGetByCourseId } from "@/services/grade/gradeGet"
import { IGrade } from "@/services/grade/IGrade"
import { enrollmentRequirementCreate } from "@/services/enrollmentRequirement/enrollmentRequirementCreate"

export const ModalEnrollmentRequirementCreate = () => {
  const { isOpen, onClose } = useEnrollmentRequirementModal()
  const { pushEnrollmentRequirement } = useEnrollmentRequirementsStore()
  const [schoolYears, setSchoolYears] = useState<ISchoolYear[]>([])
  const [courses, setCourses] = useState<ICourse[]>([])
  const [grades, setGrades] = useState<IGrade[]>([])
  const [courseId, setCourseId] = useState<string>('')

  useEffect(() => {
    (async () => {
      const getSchoolYears = schoolYearListAll()
      const getCourses = courseListAll()
      const [courses, schoolYears] = await Promise.all([getCourses, getSchoolYears])
      if (schoolYears.status === 200 && schoolYears.data) setSchoolYears(schoolYears.data)
      if (courses.status === 200 && courses.data) setCourses(courses.data)
    })()
  }, [])

  useEffect(() => {
    if (courseId) {
      (async () => {
        const grades = await gradeGetByCourseId(courseId)
        if (grades.status === 200 && grades.data) setGrades(grades.data)
      })()
    }
  }, [courseId])

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Novo Plano de pagamento</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action={async formData => {
          const { data, status } = await enrollmentRequirementCreate(formData)
          if (status === 201) {
            pushEnrollmentRequirement({
              ...data,
              courseName: courses.find(course => course.id === data.courseId)?.name,
              gradeName: grades.find(grade => grade.id === data.gradeId)?.name,
              schoolYearName: schoolYears.find(schoolYear => schoolYear.id === data.schoolYearId)?.name,
            })
            onClose()
          }
        }} className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-2 gap-4 w-full">
            <CustomSelect required options={schoolYears.map(schoolYear => ({ label: schoolYear.name, value: schoolYear.id }))} onChange={() => ({})} label="Período letivo" name="schoolYearId" />
            <CustomSelect required options={courses.map(course => ({ label: course.name, value: course.id }))} onChange={evt => setCourseId(evt.currentTarget.value)} label="Curso" name="courseId" />
            <CustomSelect required options={grades.map(grade => ({ label: grade.name, value: grade.id }))} onChange={() => ({})} label="Série" name="gradeId" />
            <div className="col-start-1 col-end-3">
              <InputText required label="Nome *" name="name" />
            </div>
            <label htmlFor="isRequired" className="col-start-1 col-end-3 flex gap-1 font-semibold text-[--text-primary]">
              <input type="checkbox" name="isRequired" id="isRequired" className="w-4" />
              É obrigatório
            </label>
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
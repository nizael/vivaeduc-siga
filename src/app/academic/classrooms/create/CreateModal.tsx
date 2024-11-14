'use client'
import { InputText } from "@/components/inputs/InputText"
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { courseCreate } from "@/services/course/courseCreate"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { modalityCourseOptions } from "@/configs/modalityCourse"
import { useClassroomCreateModalStore } from "../stores/useClassroomCreateModal"
import { useClassroomStore } from "../stores/useClassroomStore"
import { classroomCreate } from "@/services/classroom/classroomCreate"
import { useEffect, useState } from "react"
import { ICourse } from "@/services/course/ICourse"
import { courseListAll } from "@/services/course/courseListAll"
import { schoolYearListAll } from "@/services/school-year/schoolYearListAll"
import { gradeGetByCourseId, gradeListAll } from "@/services/grade/gradeGet"
import { IGrade } from "@/services/grade/IGrade"
import { IEmployee } from "@/services/employee/IEmployee"
import { employeeGetByRole } from "@/services/employee/employeeGet"

export const ClassroomCreateModal = () => {
  const { isOpen, onClose } = useClassroomCreateModalStore()
  const { pushClassroom } = useClassroomStore()
  const [courses, setCourses] = useState<ICourse[]>([])
  const [grades, setGrades] = useState<IGrade[]>([])
  const [coordinators, setCoordinators] = useState<IEmployee[]>([])
  const [selectCourseId, setSelectCourseId] = useState<string>()
  const [schoolYears, setSchoolYears] = useState<ICourse[]>([])

  useEffect(() => {
    (async () => {
      const getCourses = courseListAll()
      const getSchoolYears = schoolYearListAll()
      const getCoordinators = employeeGetByRole('COORDINATOR')
      const [courses, schoolYears, coordinators] = await Promise.all([getCourses, getSchoolYears, getCoordinators])
      if (courses.status === 200 && courses.data) setCourses(courses.data)
      if (coordinators.status === 200 && coordinators.data) setCoordinators(coordinators.data)
      if (schoolYears.status === 200 && schoolYears.data) setSchoolYears(schoolYears.data)
    })()
  }, [])

  useEffect(() => {
    if (selectCourseId) {
      (async () => {
        const { status, data } = await gradeGetByCourseId(selectCourseId)
        if (status === 200 && data) setGrades(data)
      })()
    }
  }, [selectCourseId])

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-xl w-full max-h-[80%] h-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Nova Turma</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action={async formData => {
          const { data, status } = await classroomCreate(formData)
          if (status === 201) {
            pushClassroom(data)
            onClose()
          }
        }} className="p-4 flex flex-col gap-4 h-full overflow-y-auto" >
          <div className="grid grid-cols-4 gap-4 w-full ">
            <InputText required label="Código *" name="code" />
            <div className="col-start-2 col-end-5">
              <InputText required label="Nome *" name="name" />
            </div>
            <div className="col-start-1 max-sm:col-end-5 col-end-3">
              <CustomSelect required options={schoolYears?.map(schoolYear => ({ label: schoolYear.name, value: schoolYear.id }))} onChange={() => ({})} label="Período *" name="schoolYearId" />
            </div>
            <div className="max-sm:col-start-1 col-start-3 col-end-5">
              <CustomSelect required options={courses?.map(course => ({ label: course.name, value: course.id }))} onChange={evt => setSelectCourseId(evt.currentTarget.value)} label="Curso *" name="courseId" />
            </div>
            <div className="col-start-1 col-end-3">
              <CustomSelect required options={grades?.map(grade => ({ label: grade.name, value: grade.id }))} onChange={() => ({})} label="Série *" name="gradeId" />
            </div>
            <div className="col-start-3 col-end-5">
              <InputText label="INEP" name="inep" placeholder="Opcional" />
            </div>
            <div className="col-start-1 col-end-5">
              <div className="flex flex-col gap-2 w-full">
                <span className=" text-[--text-primary] font-semibold ">Turno *</span>
                <div className="border border-[#C1BBEB] bg-white rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary] flex items-center gap-2 max-sm:flex-col max-sm:items-start" >
                  <label htmlFor="morning" className="flex items-center gap-1">
                    <input required value="MORNING" id="morning" type="radio" name="shift" />
                    Manhã
                  </label>
                  <label htmlFor="afternoon" className="flex items-center gap-1">
                    <input required value="AFTERNOON" id="afternoon" type="radio" name="shift" />
                    Tarde
                  </label>
                  <label htmlFor="night" className="flex items-center gap-1">
                    <input required value="NIGHT" type="radio" id="night" name="shift" />
                    Noite
                  </label>
                  <label htmlFor="intermediate" className="flex items-center gap-1">
                    <input required value="INTERMEDIATE" type="radio" id="intermediate" name="shift" />
                    Intermediário
                  </label>
                  <label htmlFor="fullTime" className="flex items-center gap-1">
                    <input required value="FULL_TIME" type="radio" id="fullTime" name="shift" />
                    Integral
                  </label>
                </div>
              </div>
            </div>

            <div className="col-start-1 col-end-3">
              <InputText type="date" required label="Inicio *" name="startDate" />
            </div>
            <div className="col-start-3 col-end-5">
              <InputText type="date" required label="Tèrmino *" name="endDate" />
            </div>
            <InputText type="number" required label="Vagas *" name="numberVacancies" />
            {/* <div className="max-sm:col-start-1 col-start-2 col-end-5">
              <CustomSelect required options={coordinators?.map(coord => ({ label: coord.name, value: coord.id }))} onChange={() => ({})} label="Coordenador *" name="coordinatorId" />
            </div> */}
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
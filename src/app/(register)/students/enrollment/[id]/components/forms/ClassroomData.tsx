'use client'
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { classroomsListByGradeIdSchoolYearId } from "@/services/classroom/classroomGet"
import { IClassroom } from "@/services/classroom/IClassroom"
import { courseListAll } from "@/services/course/courseListAll"
import { ICourse } from "@/services/course/ICourse"
import { gradeGetByCourseId } from "@/services/grade/gradeGet"
import { IGrade } from "@/services/grade/IGrade"
import { ISchoolYear } from "@/services/school-year/ISchoolYear"
import { schoolYearListAll } from "@/services/school-year/schoolYearListAll"
import { useEffect, useState } from "react"
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"

export const ClassroomData = () => {
  const { schoolYearId, courseId, setSchoolYearId, setCourseId, gradeId, setGradeId } = useEnrollmentStore()
  const [schoolYears, setSchoolYears] = useState<ISchoolYear[]>([])

  const [courses, setCourses] = useState<ICourse[]>([])

  const [grades, setGrades] = useState<IGrade[]>([])
  const [gradeDefaultValue, setGradeDefaultValue] = useState<{ label: string, value: string }>({ label: '', value: '' })

  const [classrooms, setClassrooms] = useState<IClassroom[]>([])
  const [classroomDefaultValue, setClassroomDefaultValue] = useState<{ label: string, value: string }>({ label: '', value: '' })

  useEffect(() => {
    (async () => {
      const getSchoolYears = schoolYearListAll()
      const getCourses = courseListAll()
      const [schoolYears, courses] = await Promise.all([getSchoolYears, getCourses])
      if (schoolYears.status === 200 && schoolYears.data) setSchoolYears(schoolYears.data)
      if (courses.status === 200 && courses.data) setCourses(courses.data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      if (courseId) {
        const { data, status } = await gradeGetByCourseId(courseId)
        if (status === 200 && data) setGrades(data)
      }
    })()
    return () => {
      setClassroomDefaultValue({ label: '', value: '' })
      setGradeDefaultValue({ label: '', value: '' })
    }
  }, [courseId])

  useEffect(() => {
    (async () => {
      if (gradeId && schoolYearId) {
        const { data, status } = await classroomsListByGradeIdSchoolYearId(schoolYearId, gradeId)
        if (status === 200 && data) setClassrooms(data)
      }
    })()

    return () => {
      setClassroomDefaultValue({ label: '', value: '' })
    }
  }, [gradeId, schoolYearId])

  return (
    <details open className="bg-gray-50 flex flex-col gap-4 shadow-sm ">
    <summary className="p-4 flex justify-between border-b bg-primary text-gray-50">
        <span className=" font-semibold text-start w-full flex items-center gap-2"><ClassroomIcon /> Turma</span>
        <DropdownIcon className="w-5" />
      </summary>
      <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
        <CustomSelect name="schoolYearId" options={schoolYears.map(schoolYear => ({ label: schoolYear.name, value: schoolYear.id }))} label="Período letivo" onChange={evt => setSchoolYearId(evt.currentTarget.value)} />
        <CustomSelect name="courseId" options={courses.map(course => ({ label: course.name, value: course.id }))} label="Curso" onChange={evt => setCourseId(evt.currentTarget.value)} />
        <CustomSelect name="gradeId" initialValue={gradeDefaultValue} required options={grades.map(grade => ({ label: grade.name, value: grade.id }))} label="Série" onChange={evt => setGradeId(evt.currentTarget.value)} />
        <CustomSelect name="classroomId" initialValue={classroomDefaultValue} required options={classrooms.map(classroom => ({ label: classroom.name, value: classroom.id }))} label="Turma" onChange={evt => ({})} />
        <CustomSelect name="status" initialValue={classroomDefaultValue} required options={[{label: 'Cursando', value:'STUDYING'},{label: 'Concluido', value:'COMPLETED'}]} label="Situação" onChange={evt => ({})} />
      </div>
    </details>
  )
}
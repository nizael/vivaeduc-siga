'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { courseModality } from "@/configs/courseModality"
import { ICourse } from "@/services/course/ICourse"
import { useCourseStore } from "../../stores/useCourseStore"
import { useEffect } from "react"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { Pagination } from "./Pagination"

export const ListCourses = ({ courses }: { courses: ICourse[] }) => {
  const { setCourses, courseViews } = useCourseStore()
  useEffect(() => {
    if (courses) setCourses(courses)
  }, [courses])
  if (!courseViews?.length) return <EmptyPage label="Não existem cursos cadastrados" />
  return (
    <section className="bg-gray-50 shadow-sm w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <table className="w-full">
        <thead className="bg-primary text-gray-50">
            <tr className="text-sm font-semibold border-b">
              <td className="px-4 py-2">Código</td>
              <td className="px-4 py-2">Nome</td>
              <td className="px-4 py-2 text-center">Portaria autorização</td>
              <td className="px-4 py-2 text-center">Modalidade</td>
              <td className="px-4 py-2 text-center">Situação</td>
              <td className="px-4 py-2 text-end">Ação</td>
            </tr>
          </thead>
          <tbody>
            {courseViews?.map(course => <tr key={course.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
              <td className="p-4 py-2"> {course.code}</td>
              <td className="p-4 py-2 "> {course.name}</td>
              <td className="p-4 py-2 text-center"> {course.authorizationOrdinance || '-'}</td>
              <td className="p-4 py-2 text-center"> {courseModality[course.modality]}</td>
              <td className="p-4 py-2 text-center"> {course.isActive ? 'Ativo' : 'Inativo'}</td>
              <td className="p-4 py-2 text-end"> <button><EditIcon /></button> </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
  )
}
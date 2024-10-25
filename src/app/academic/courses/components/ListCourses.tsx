'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { courseModality } from "@/configs/courseModality"
import { ICourse } from "@/services/course/ICourse"

export const ListCourses = ({ courses }: { courses: ICourse[] }) => {

  if (!courses) return null
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2">Código</td>
            <td className="px-4 py-2">Nome</td>
            <td className="px-4 py-2 text-center">Portaria autorização</td>
            <td className="px-4 py-2 text-center">Modalidade</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-end">Ação</td>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => <tr key={course.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4"> {course.code}</td>
            <td className="p-4 "> {course.name}</td>
            <td className="p-4 text-center"> {course.authorizationOrdinance || '-'}</td>
            <td className="p-4 text-center"> {courseModality[course.modality]}</td>
            <td className="p-4 text-center"> {course.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-end"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
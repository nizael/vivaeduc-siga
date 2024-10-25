'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { typeAssessment } from "@/configs/typeAssessment"
import { IGrade } from "@/services/grade/IGrade"
import { useGradeStore } from "../../stores/useGradeStore"
import { useEffect } from "react"

export const ListGrades = ({ grades }: { grades: IGrade[] }) => {
  const { setGrades, gradeViews } = useGradeStore()

  useEffect(() => {
    if (grades) setGrades(grades)
  }, [grades])

  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2">Código</td>
            <td className="px-4 py-2 text-center">Nome</td>
            <td className="px-4 py-2 text-center">Educacenso</td>
            <td className="px-4 py-2 text-center">Tipo Avaliação</td>
            <td className="px-4 py-2 ">Curso</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-end">Ação</td>
          </tr>
        </thead>
        <tbody>
          {gradeViews?.map(grade => <tr key={grade.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4"> {grade.code}</td>
            <td className="p-4 text-center"> {grade.name}</td>
            <td className="p-4 text-center"> {grade.educacenso || '-'}</td>
            <td className="p-4 text-center"> {typeAssessment[grade.typeAssessment]}</td>
            <td className="p-4 "> {grade.course?.name}</td>
            <td className="p-4 text-center"> {grade.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-end"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
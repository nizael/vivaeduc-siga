'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { ISubject } from "@/services/subject/ISubject"
import { useSubjectStore } from "../../stores/useSubjectStore"
import { useEffect } from "react"

export const ListGrades = ({ subjects }: { subjects: ISubject[] }) => {
  const { setSubjects, subjectViews } = useSubjectStore()

  useEffect(() => {
    if (subjects) setSubjects(subjects)
  }, [subjects])
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2">Código</td>
            <td className="px-4 py-2">Nome da série</td>
            <td className="px-4 py-2 text-center">BNCC</td>
            <td className="px-4 py-2 text-center">Educacenso</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-end">Ação</td>
          </tr>
        </thead>
        <tbody>
          {subjectViews?.map(subject => <tr key={subject.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4"> {subject.code}</td>
            <td className="p-4 "> {subject.name}</td>
            <td className="p-4 text-center"> {subject.bncc}</td>
            <td className="p-4 text-center"> {subject.educacenso || '-'}</td>
            <td className="p-4 text-center"> {subject.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-end"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
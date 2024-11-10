'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { ISubject } from "@/services/subject/ISubject"
import { useSubjectStore } from "../../stores/useSubjectStore"
import { useEffect } from "react"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { Pagination } from "@/components/pagination/Pagination"

export const ListGrades = ({ listSubjects }: { listSubjects: ISubject[] }) => {
  const { setSubjects, subjectViews, subjects, setCurrentPage, currentPage } = useSubjectStore()

  useEffect(() => {
    if (listSubjects) setSubjects(listSubjects)
  }, [listSubjects])
  if (!subjectViews?.length) return <EmptyPage label="Não existem disciplinas cadastrados" />
  return (
    <section className="bg-gray-50  shadow-sm w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <table className="w-full">
        <thead className="bg-primary text-gray-50">
            <tr className="text-sm font-semibold  border-b">
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
              <td className="px-4 py-2"> {subject.code}</td>
              <td className="px-4 py-2 "> {subject.name}</td>
              <td className="px-4 py-2 text-center"> {subject.bncc}</td>
              <td className="px-4 py-2 text-center"> {subject.educacenso || '-'}</td>
              <td className="px-4 py-2 text-center"> {subject.isActive ? 'Ativo' : 'Inativo'}</td>
              <td className="px-4 py-2 text-end"> <button><EditIcon /></button> </td>
            </tr>)}
          </tbody>
        </table>
      </div>
     {subjects&& <Pagination currentPage={currentPage} items={subjects} setCurrentPage={setCurrentPage} />}
    </section>
  )
}
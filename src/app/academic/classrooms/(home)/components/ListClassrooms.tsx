'use client'
import { EditIcon } from "@/components/icons/EditIcon"
import { shift } from "@/configs/shift"
import { IClassroom } from "@/services/classroom/IClassroom"
import { useEffect } from "react"
import { useClassroomStore } from "../../stores/useClassroomStore"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { Pagination } from "@/components/pagination/Pagination"


export const ListClassrooms = ({ listClassrooms }: { listClassrooms: IClassroom[] }) => {
  const { setClassrooms, classroomViews, classrooms, setCurrentPage, currentPage } = useClassroomStore()

  useEffect(() => {
    if (listClassrooms) setClassrooms(listClassrooms)
  }, [listClassrooms])
  if (!classroomViews?.length) return <EmptyPage label="Não existem turmas cadastradas" />
  return (
    <section className="bg-gray-50 shadow-sm w-full flex flex-col gap-4  grow">
      <div className="grow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-primary text-gray-50">
            <tr className="text-sm font-semibold border-b">
              <td className="px-4 py-2">Período</td>
              <td className="px-4 py-2">Curso</td>
              <td className="px-4 py-2 text-center">Série</td>
              <td className="px-4 py-2 text-center">Nome da turma</td>
              <td className="px-4 py-2 text-center">Código</td>
              <td className="px-4 py-2 text-center">Turno</td>
              <td className="px-4 py-2 text-center">Quandidade de alunos</td>
              <td className="px-4 py-2 text-center">Situação</td>
              <td className="px-4 py-2 text-center">Ação</td>
            </tr>
          </thead>
          <tbody>
            {classroomViews?.map(classroom => <tr key={classroom.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
              <td className="px-4 py-2"> {classroom.schoolYear.code}</td>
              <td className="px-4 py-2"> {classroom.course.name}</td>
              <td className="px-4 py-2 text-center"> {classroom.grade.name}</td>
              <td className="px-4 py-2 text-center"> {classroom.name}</td>
              <td className="px-4 py-2 text-center"> {classroom.code}</td>
              <td className="px-4 py-2 text-center"> {shift[classroom.shift]}</td>
              <td className="px-4 py-2 text-center"> {classroom.numberVacancies}</td>
              <td className="px-4 py-2 text-center"> {classroom.isActive ? 'Ativo' : 'Inativo'}</td>
              <td className="px-4 py-2 text-center"> <button><EditIcon /></button> </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {classrooms && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} items={classrooms} />}
    </section>
  )
}
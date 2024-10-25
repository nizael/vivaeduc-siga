import { EditIcon } from "@/components/icons/EditIcon"
import { shift } from "@/configs/shift"
import { IClassroom } from "@/services/classroom/IClassroom"


export const ListClassrooms = ({ classrooms }: { classrooms: IClassroom[] }) => {

  if (!classrooms) return null
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col max-h-[395px] p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
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
          {classrooms.map(classroom => <tr key={classroom.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4"> {classroom.schoolYear.code}</td>
            <td className="p-4"> {classroom.course.name}</td>
            <td className="p-4 text-center"> {classroom.grade.name}</td>
            <td className="p-4 text-center"> {classroom.name}</td>
            <td className="p-4 text-center"> {classroom.code}</td>
            <td className="p-4 text-center"> {shift[classroom.shift]}</td>
            <td className="p-4 text-center"> {classroom.numberVacancies}</td>
            <td className="p-4 text-center"> {classroom.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-center"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
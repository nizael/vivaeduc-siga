import { EditIcon } from "@/components/icons/EditIcon"

const classrooms = [
  { id: '1', academicYear: '2025', grade:'8º Ano', period:'Manhã', studentAmount:45, slug: '0INF03J1M1', name: 'INFJ1M1', startDate: '01/01/2024', course: 'Educação Infantil', isActive: true },
  { id: '2', academicYear: '2025', grade:'8º Ano', period:'Manhã', studentAmount:45, slug: '0INF03J1M1', name: 'INFJ1M1', startDate: '01/01/2024', course: 'Educação Infantil', isActive: true },
  { id: '3', academicYear: '2025', grade:'8º Ano', period:'Manhã', studentAmount:45, slug: '0INF03J1M1', name: 'INFJ1M1', startDate: '01/01/2024', course: 'Educação Infantil', isActive: true },
  { id: '4', academicYear: '2025', grade:'8º Ano', period:'Manhã', studentAmount:45, slug: '0INF03J1M1', name: 'INFJ1M1', startDate: '01/01/2024', course: 'Educação Infantil', isActive: true },
  { id: '5', academicYear: '2025', grade:'8º Ano', period:'Manhã', studentAmount:45, slug: '0INF03J1M1', name: 'INFJ1M1', startDate: '01/01/2024', course: 'Educação Infantil', isActive: true },
]

export const ListClassrooms = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col max-h-[395px] p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2 text-center">Período</td>
            <td className="px-4 py-2 text-center">Curso</td>
            <td className="px-4 py-2 text-center">Série</td>
            <td className="px-4 py-2 text-center">Nome da turma</td>
            <td className="px-4 py-2 text-center">Sigla</td>
            <td className="px-4 py-2 text-center">Turno</td>
            <td className="px-4 py-2 text-center">Quandidade de alunos</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-center">Ação</td>
          </tr>
        </thead>
        <tbody>
          {classrooms.map(classroom => <tr key={classroom.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4 text-center"> {classroom.academicYear}</td>
            <td className="p-4 text-center"> {classroom.course}</td>
            <td className="p-4 text-center"> {classroom.grade}</td>
            <td className="p-4 text-center"> {classroom.name}</td>
            <td className="p-4 text-center"> {classroom.slug}</td>
            <td className="p-4 text-center"> {classroom.period}</td>
            <td className="p-4 text-center"> {classroom.studentAmount}</td>
            <td className="p-4 text-center"> {classroom.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-center"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
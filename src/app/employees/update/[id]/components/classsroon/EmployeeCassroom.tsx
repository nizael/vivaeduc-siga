import { ClassroomIcon } from "@/components/icons/ClassroomIcon"

const classrooms = [
  { id: '1', name: '1º ANO', academicYear: '2025', grade: '8º Ano', status: 'Cursando' },
  { id: '2', name: '2º ANO', academicYear: '2024', grade: '7º Ano', status: 'Concluído' },
  { id: '3', name: '3º ANO', academicYear: '2023', grade: '6º Ano', status: 'Concluído' },
  { id: '4', name: '4º ANO', academicYear: '2022', grade: '5º Ano', status: 'Concluído' },
  { id: '5', name: '5º ANO', academicYear: '2021', grade: '4º Ano', status: 'Concluído' },
]

export const EmployeeClassrooms = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-md flex flex-col max-h-[395px]">
      <div className="flex items-center gap-2 text-[--text-primary] rounded-t-xl p-4 border-b">
        <h5 className="text-[--text-primary] font-semibold flex items-center gap-2">
          <ClassroomIcon />
          Turmas
        </h5>
      </div>

      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500">
            <td className="px-4 py-2">Turna</td>
            <td className="px-4 py-2 text-center">Período letivo</td>
            <td className="px-4 py-2 text-center">Série</td>
            <td className="px-4 py-2 text-end">Situação</td>
          </tr>
        </thead>
        <tbody>
          {classrooms.map(classroom => <tr key={classroom.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary]">
            <td className="p-4"> {classroom.name}</td>
            <td className="p-4 text-center"> {classroom.academicYear}</td>
            <td className="p-4 text-center"> {classroom.grade}</td>
            <td className="p-4 text-end"> {classroom.status}</td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
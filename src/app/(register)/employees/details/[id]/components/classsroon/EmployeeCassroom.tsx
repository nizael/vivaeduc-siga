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
    <section className=" bg-gray-50 shadow-sm flex flex-col">
      <div className="flex items-center gap-2 bg-primary px-4 py-2 border-b">
        <h5 className="text-gray-50 font-semibold flex items-center gap-2">
          <ClassroomIcon />
          Turmas
        </h5>
      </div>

      <table className="overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500">
            <td className="px-4 py-2">Turna</td>
            <td className="px-4 py-2 text-center">Período letivo</td>
            <td className="px-4 py-2 text-center">Série</td>
            <td className="px-4 py-2 text-end">Situação</td>
          </tr>
        </thead>
        <tbody>
          {classrooms.map(classroom => <tr key={classroom.id} className="text-primary font-semibold text-sm hover:bg-[--hover-secondary]">
            <td className="px-4 py-2"> {classroom.name}</td>
            <td className="px-4 py-2 text-center"> {classroom.academicYear}</td>
            <td className="px-4 py-2 text-center"> {classroom.grade}</td>
            <td className="px-4 py-2 text-end"> {classroom.status}</td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
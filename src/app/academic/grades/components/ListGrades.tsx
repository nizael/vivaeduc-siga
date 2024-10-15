import { EditIcon } from "@/components/icons/EditIcon"

const grades = [
  { id: '1',  name: 'Jardim I', service: 'Mens Educação Infantil/Maternal I', course: 'Educação Infantil', isActive: true },
  { id: '2',  name: 'Jardim I', service: 'Mens Educação Infantil/Maternal I', course: 'Educação Infantil', isActive: true },
  { id: '3',  name: 'Jardim I', service: 'Mens Educação Infantil/Maternal I', course: 'Educação Infantil', isActive: true },
  { id: '4',  name: 'Jardim I', service: 'Mens Educação Infantil/Maternal I', course: 'Educação Infantil', isActive: true },
  { id: '5',  name: 'Jardim I', service: 'Mens Educação Infantil/Maternal I', course: 'Educação Infantil', isActive: true },
]

export const ListGrades = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col max-h-[395px] p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2 ">Curso</td>
            <td className="px-4 py-2 text-center">Nome da série</td>
            <td className="px-4 py-2 text-center">Serviço</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-end">Ação</td>
          </tr>
        </thead>
        <tbody>
          {grades.map(grade => <tr key={grade.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4 "> {grade.course}</td>
            <td className="p-4 text-center"> {grade.name}</td>
            <td className="p-4 text-center"> {grade.service}</td>
            <td className="p-4 text-center"> {grade.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-end"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
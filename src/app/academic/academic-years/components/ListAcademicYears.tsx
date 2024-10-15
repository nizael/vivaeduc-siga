import { EditIcon } from "@/components/icons/EditIcon"

const evaluations = [
  { id: '1', slug: '2024', name: 'Ano letivo 2024', startDate: '01/01/2024', endDate: '20/12/2024', isActive: true },
  { id: '2', slug: '2024', name: 'Ano letivo 2024', startDate: '01/01/2024', endDate: '20/12/2024', isActive: true },
  { id: '3', slug: '2024', name: 'Ano letivo 2024', startDate: '01/01/2024', endDate: '20/12/2024', isActive: true },
  { id: '4', slug: '2024', name: 'Ano letivo 2024', startDate: '01/01/2024', endDate: '20/12/2024', isActive: true },
  { id: '5', slug: '2024', name: 'Ano letivo 2024', startDate: '01/01/2024', endDate: '20/12/2024', isActive: true },
]

export const ListAcademicYears = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col max-h-[395px] p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2 text-center">Sigla</td>
            <td className="px-4 py-2 text-center">Nome do período</td>
            <td className="px-4 py-2 text-center">Data inicial</td>
            <td className="px-4 py-2 text-center">Data final</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-center">Ação</td>
          </tr>
        </thead>
        <tbody>
          {evaluations.map(academicYear => <tr key={academicYear.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4 text-center"> {academicYear.slug}</td>
            <td className="p-4 text-center"> {academicYear.name}</td>
            <td className="p-4 text-center"> {academicYear.startDate}</td>
            <td className="p-4 text-center"> {academicYear.endDate}</td>
            <td className="p-4 text-center"> {academicYear.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-center"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
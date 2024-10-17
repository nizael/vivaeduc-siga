import { EditIcon } from "@/components/icons/EditIcon"

const subjects = [
  { id: '1', name: 'Matemática', slug: 'MAT', type: 'Normal', garde: '8º Ano', evaluationRequired: true, isActive: true },
  { id: '2', name: 'Matemática', slug: 'MAT', type: 'Normal', garde: '8º Ano', evaluationRequired: true, isActive: true },
  { id: '3', name: 'Matemática', slug: 'MAT', type: 'Normal', garde: '8º Ano', evaluationRequired: true, isActive: true },
  { id: '4', name: 'Matemática', slug: 'MAT', type: 'Normal', garde: '8º Ano', evaluationRequired: true, isActive: true },
  { id: '5', name: 'Matemática', slug: 'MAT', type: 'Normal', garde: '8º Ano', evaluationRequired: true, isActive: true },
]

export const ListGrades = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2">Nome da série</td>
            <td className="px-4 py-2 text-center">Sigla</td>
            <td className="px-4 py-2 text-center">Tipo de disciplina</td>
            <td className="px-4 py-2 text-center">Série</td>
            <td className="px-4 py-2 text-center">Requer nota</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-end">Ação</td>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => <tr key={subject.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4 "> {subject.name}</td>
            <td className="p-4 text-center"> {subject.slug}</td>
            <td className="p-4 text-center"> {subject.type}</td>
            <td className="p-4 text-center"> {subject.garde}</td>
            <td className="p-4 text-center"> {subject.evaluationRequired ? 'Sim' : 'Inativo'}</td>
            <td className="p-4 text-center"> {subject.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-end"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
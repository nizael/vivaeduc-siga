import { CallIcon } from "@/common/common/components/icons/CallIcon"
import { DotsIcon } from "@/common/common/components/icons/DotsIcon"
import { EmailIcon } from "@/common/common/components/icons/EmailIcon"
import { Pagination } from "./Pagination"

const listStudents = [
  { id: '1', name: 'Samanta William', code: '#123456789', contact: { email: 's@email', phone: '123' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '2', name: 'Tony Soap', code: '#123456789', contact: { email: 's@email', phone: '123' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '3', name: 'Karen Hope', code: '#123456789', contact: { email: 's@email', phone: '123' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '4', name: 'Jordan Nico', code: '#123456789', contact: { email: 's@email', phone: '123' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '5', name: 'Nadila Adja', code: '#123456789', contact: { email: 's@email', phone: '123' }, grade: '8º Ano', classroom: '8-FND' },
  { id: '6', name: 'Johnny Ahmad', code: '#123456789', contact: { email: 's@email', phone: '123' }, grade: '8º Ano', classroom: '8-FND' },
]
export const ListStudents = () => {
  return (
    <section className="bg-gray-50 rounded-xl w-full flex flex-col gap-4 overflow-x-auto">
      <table className="w-full">
        <thead className="p-4">
          <tr className="text-xs font-semibold text-[#303972]">
            <td className="p-4 w-12"><input type="checkbox" /></td>
            <td className="p-4">Nome</td>
            <td className="p-4">Matrícula</td>
            <td className="p-4 text-center w-[120px]">Contato</td>
            <td className="p-4 text-center">Série</td>
            <td className="p-4 text-center">Turma</td>
            <td className="p-4  w-16">Ação</td>
          </tr>
        </thead>
        <tbody className="p-4">
          {listStudents.map(student => <tr key={student.id} className="text-xs font-semibold text-[#4D44B5] border-l-[4px] border-transparent border-t border-t-gray-200 even:border-l-[#4D44B5]">
            <td className="p-4"><input type="checkbox" /></td>
            <td className="p-4 text-[#303972] text-sm font-bold">{student.name}</td>
            <td className="p-4">{student.code}</td>
            <td className="p-4 flex items-center gap-1 justify-center">
              <button className="w-[40px] h-[40px] grid place-content-center bg-gray-100 rounded-full"><CallIcon /></button>
              <button className="w-[40px] h-[40px] grid place-content-center bg-gray-100 rounded-full"><EmailIcon /></button>
            </td>
            <td className="p-4 text-center">{student.grade}</td>
            <td className="p-4 text-center">{student.classroom}</td>
            <td className="p-4 text-center"><button className="w-[40px] h-[40px] grid place-content-center text-gray-500">{<DotsIcon />}</button></td>
          </tr>)}
        </tbody>
      </table>

      <Pagination />
    </section>

  )
}
import { EditIcon } from "@/components/icons/EditIcon"

const courses = [
  { id: '1', name: 'Educação Infantil', authorization: '#01245697', official: true, isActive: true },
  { id: '2', name: 'Educação Infantil', authorization: '#01245697', official: true, isActive: true },
  { id: '3', name: 'Educação Infantil', authorization: '#01245697', official: true, isActive: true },
  { id: '4', name: 'Educação Infantil', authorization: '#01245697', official: true, isActive: true },
  { id: '5', name: 'Educação Infantil', authorization: '#01245697', official: true, isActive: true },
]

export const ListCourses = () => {
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm flex flex-col p-4">
      <table className=" overflow-y-auto h-full ">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 border-b">
            <td className="px-4 py-2">Nome</td>
            <td className="px-4 py-2 text-center">Portaria autorização</td>
            <td className="px-4 py-2 text-center">Oficial</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-end">Ação</td>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => <tr key={course.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary] border-b last:border-none">
            <td className="p-4 "> {course.name}</td>
            <td className="p-4 text-center"> {course.authorization}</td>
            <td className="p-4 text-center"> {course.official ? 'Sim' : 'Inativo'}</td>
            <td className="p-4 text-center"> {course.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 text-end"> <button><EditIcon /></button> </td>
          </tr>)}
        </tbody>
      </table>
    </section>
  )
}
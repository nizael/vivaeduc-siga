import { Student2Icon } from "@/components/icons/Student2Icon"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import Image from "next/image"

const listDependents = [
  { id: '1', image: '/temp/employee.jpg', dependentName: 'Samantha William', isActive: true, kinship: 'VII A' },
  { id: '2', image: '/temp/employee.jpg', dependentName: 'Tony Soap', isActive: true, kinship: 'VII A' },
]

export const ListDependents = () => {
  return (
    <div className="flex flex-col shadow-sm rounded-xl bg-gray-50">
      <div className="flex text-[--text-primary] items-center rounded-t-xl gap-2 p-4 border-b">
        <Student2Icon />
        <p className="font-semibold">Dependentes</p>
      </div>
      <table className="w-full">
        <thead className="p-4">
          <tr className="text-xs font-semibold text-[--text-primary]">
            <td className="px-4 py-2 w-[72px]"></td>
            <td className="px-4 py-2">Nome</td>
            <td className="px-4 py-2 text-center">Parentesco</td>
            <td className="px-4 py-2 text-center">Situação</td>
            <td className="px-4 py-2 text-center w-[80px]">Ação</td>
          </tr>
        </thead>
        <tbody className="p-4">
          {listDependents.map(dependent => <tr key={dependent.id}>
            <td className="p-4">
              <div className="w-[40px] h-[40px] rounded-full bg-[#C1BBEB] flex-none overflow-hidden">
                {dependent.image && <Image src={dependent.image} width={40} height={40} alt={dependent.dependentName} />}
              </div>
            </td>
            <td className="p-4">{dependent.dependentName}</td>
            <td className="p-4 text-center">{dependent.kinship}</td>
            <td className="p-4 text-center">{dependent.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 flex justify-end">
              <NavMenu items={[
                { href: `/students/details/${dependent.id}`, label: 'Detalhes' },
                { href: `/students/details/${dependent.id}`, label: 'Editar' },
              ]} />
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

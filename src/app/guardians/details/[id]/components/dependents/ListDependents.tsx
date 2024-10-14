import { DotsIcon } from "@/components/icons/DotsIcon"
import { Student2Icon } from "@/components/icons/Student2Icon"
import Image from "next/image"

const listDependents = [
  { id: '1', image: '/temp/employee.jpg', dependentName: 'Samantha William', isActive: true, kinship: 'VII A' },
  { id: '2', image: '/temp/employee.jpg', dependentName: 'Tony Soap', isActive: true, kinship: 'VII A' },
]

export const ListDependents = () => {
  return (
    <div className="flex flex-col gap-4 shadow-sm rounded-xl p-4 bg-gray-50">
      <div className="flex text-[--text-primary] items-center  gap-2 px-4">
        <Student2Icon />
        <p className="text-xl font-semibold">Dependentes</p>
      </div>
      <table className="w-full">
        <thead className="p-4">
          <tr className="text-xs font-semibold text-[--text-primary]">
            <td className="p-4 w-[100px]">Imagems</td>
            <td className="p-4">Nome</td>
            <td className="p-4 text-center">Parentesco</td>
            <td className="p-4 text-center">Situação</td>
            <td className="p-4 text-center w-[80px]">Ação</td>
          </tr>
        </thead>
        <tbody className="p-4">
          {listDependents.map(dependent => <tr key={dependent.id}>
            <td className="p-4 flex">
              <div className="w-[40px] h-[40px] rounded-full bg-[#C1BBEB] flex-none overflow-hidden">
                {dependent.image && <Image src={dependent.image} width={40} height={40} alt={dependent.dependentName} />}
              </div>
            </td>
            <td className="p-4">{dependent.dependentName}</td>
            <td className="p-4 text-center">{dependent.kinship}</td>
            <td className="p-4 text-center">{dependent.isActive ? 'Ativo' : 'Inativo'}</td>
            <td className="p-4 flex justify-end"><button className="w-[40px] h-[40px] grid place-content-center text-gray-500">{<DotsIcon />}</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

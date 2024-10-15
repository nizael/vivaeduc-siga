import { NavMenu } from "@/components/nav-menu/NavMenu"
import Image from "next/image"

interface IListViewProps {
  image?: string
  studentName: string
  classroomName: string
  id: string
}

export const ListView = ({ classroomName, studentName, image, id }: IListViewProps) => {
  return (
    <li className="flex items-center gap-4 justify-between">
      <div className="flex items-center  gap-4">
        <div className="w-[40px] h-[40px] rounded-full bg-[#C1BBEB] flex-none overflow-hidden">
          {image && <Image src={image} width={40} height={40} alt={studentName} />}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-[--text-primary]">{studentName}</p>
          <p className="text-xs text-gray-500">Turma: {classroomName}</p>
        </div>
      </div>
      <NavMenu position="bottom" items={[
        { href: `/students/details/${id}`, label: 'Detalhes' },
        { href: `/students/details/${id}`, label: 'Editar' },
      ]} />
    </li>
  )
}
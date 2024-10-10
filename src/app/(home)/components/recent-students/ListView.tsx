import { EmailIcon } from "@/components/icons/EmailIcon"
import Image from "next/image"

export const ListView = ({ classroomName, studentName, image }: { image?: string, studentName: string, classroomName: string }) => {
  return (
    <li className="flex items-center gap-4 justify-between">
      <div className="flex items-center  gap-4">
        <div className="w-[40px] h-[40px] rounded-full bg-[#C1BBEB] flex-none overflow-hidden">
          {image && <Image src={image} width={40} height={40} alt={studentName} />}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-[#303972]">{studentName}</p>
          <p className="text-xs text-gray-500">Turma: {classroomName}</p>
        </div>
      </div>
      <button className="w-[40px] h-[40px] rounded-full text-gray-500 border border-gray-500 grid place-content-center"><EmailIcon /></button>
    </li>
  )
}
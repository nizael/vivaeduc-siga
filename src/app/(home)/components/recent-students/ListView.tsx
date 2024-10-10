import { EmailIcon } from "@/components/icons/EmailIcon"

export const ListView = ({ classroomName, studentName, image }: { image?: string, studentName: string, classroomName: string }) => {
  return (
    <li className="flex items-center gap-4 justify-between">
      <div className="flex items-center  gap-4">
        <div className="w-[40px] h-[40px] rounded-full bg-[#C1BBEB]">
          {image}
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
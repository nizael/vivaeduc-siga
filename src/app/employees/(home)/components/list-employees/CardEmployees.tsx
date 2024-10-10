import { CallIcon } from "@/components/icons/CallIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import Image from "next/image"

interface ICardEmployeesProps {
  image?: string
  employeeName: string
  employeeRole: string
  contact: { email: string, phone: string }
}
export const CardEmployees = ({ employeeName, employeeRole, image }: ICardEmployeesProps) => {
  return (
    <div className=" max-w-[300px] w-full items-center flex flex-col gap-4 p-8 bg-gray-50 rounded-lg relative flex-none">
      <button className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 absolute top-2 right-4"><DotsIcon /></button>
      <div className="w-[120px] h-[120px] rounded-full bg-[#C1BBEB] overflow-hidden" >
        {image && <Image src={image} width={120} height={120} alt={employeeName} />}
      </div>
      <p className="text-[#303972] font-bold text-xl">{employeeName}</p>
      <p className="text-sm text-gray-500">{employeeRole}</p>
      <div className="flex gap-4">
        <button className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[#4D44B5] text-gray-50"><CallIcon /></button>
        <button className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[#4D44B5] text-gray-50"><EmailIcon /></button>
      </div>

    </div>
  )
}
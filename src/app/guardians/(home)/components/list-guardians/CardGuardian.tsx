import { CallIcon } from "@/components/icons/CallIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import Image from "next/image"
import Link from "next/link"

interface ICardGuardianProps {
  image?: string
  guardianName: string
  employeeRole: string
  contact: { email: string, phone: string }
  id: string
}
export const CardGuardian = ({ guardianName, image, id }: ICardGuardianProps) => {
  return (
    <div className=" max-w-[300px] w-full items-center flex  gap-4 p-4 bg-gray-50 rounded-lg flex-none">
      <div className="w-[80px] h-[80px] rounded-full bg-[#C1BBEB] flex-none overflow-hidden" >
        {image && <Image src={image} width={80} height={80} alt={guardianName} />}
      </div>
      <div className="flex flex-col items-end h-full justify-between w-full gap-4">
        <Link href={`/guardians/details/${id}`} className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 top-2 right-4"><DotsIcon /></Link>
        {/* <button className="w-[40px] h-[40px] rounded-full grid place-content-center text-gray-500 top-2 right-4"><DotsIcon /></button> */}
        <p className="text-[#303972] font-bold text-xl text-start w-full">{guardianName}</p>
        <div className="flex gap-4">
          <button className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[#4D44B5] text-gray-50"><CallIcon /></button>
          <button className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[#4D44B5] text-gray-50"><EmailIcon /></button>
        </div>
      </div>

    </div>
  )
}
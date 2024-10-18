import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import Image from "next/image"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import Link from "next/link"

interface ICardGuardianProps {
  image?: string
  guardianName: string
  employeeRole: string
  contact: { email: string, phone: string }
  id: string
}
export const CardGuardian = ({ guardianName, image, id, contact }: ICardGuardianProps) => {
  return (
    <div className=" w-full items-center border flex shadow-sm gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="w-[80px] h-[80px] rounded-full bg-[#C1BBEB] flex-none overflow-hidden" >
        {image && <Image src={image} width={80} height={80} alt={guardianName} />}
      </div>
      <div className="flex flex-col items-end h-full justify-between w-full gap-4">
        <NavMenu position="bottom" items={[
          { href: `/guardians/details/${id}`, label: 'Detalhes' },
          { href: `/guardians/update/${id}`, label: 'Editar' },
        ]} />
        <p className="text-[--text-primary] font-bold text-xl text-start w-full">{guardianName}</p>
        <div className="flex gap-4">
          <Link href={`tel:${contact.phone}`} className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[--bg-primary] text-gray-50"><CallIcon /></Link>
          <Link href={`mailto:${contact.email}`} className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[--bg-primary] text-gray-50"><EmailIcon /></Link>
        </div>
      </div>

    </div>
  )
}
'use client'
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import Image from "next/image"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import Link from "next/link"
import { roles } from "@/configs/roles"
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"

interface ICardEmployeesProps {
  image?: string
  employeeName: string
  employeeRole: string
  contact: { email: string, phone: string }
  id: string
}

export const CardEmployees = ({ employeeName, employeeRole, image, id, contact }: ICardEmployeesProps) => {
  const name = employeeName.split(' ')
  const { setIsLoading } = useLoadingSpinnerStore()
  return (
    <div className=" max-w-[300px] w-full items-center flex flex-col gap-4 p-4 bg-gray-50 border shadow-sm rounded-lg relative flex-none">
      <div className="absolute top-2 right-4">
        <NavMenu position="bottom" items={[
          { href: `/employees/details/${id}`, label: 'Detalhes', onClick: () => setIsLoading(true) },
          { href: `/employees/update/${id}`, label: 'Editar', onClick: () => setIsLoading(true) },
        ]} />
      </div>
      <div className="w-[120px] h-[120px] rounded-full bg-[#C1BBEB] overflow-hidden" >
        {image && <Image src={image} width={120} height={120} alt={employeeName} />}
      </div>
      <p className="text-[--text-primary] font-bold text-xl">{[name[0], name[name.length - 1]].join(' ')}</p>
      <p className="text-sm text-gray-500">{roles[employeeRole as keyof typeof roles]}</p>
      <div className="flex gap-4">
        <Link href={`tel:${contact?.phone}`} className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[--bg-primary] text-gray-50"><CallIcon /></Link>
        <Link href={`mailto:${contact?.email}`} className="w-[40px] h-[40px] rounded-full grid place-content-center bg-[--bg-primary] text-gray-50"><EmailIcon /></Link>
      </div>
    </div>
  )
}
import { EditIcon } from "@/components/icons/EditIcon"
import Image from "next/image"
import { FieldData } from "./FieldData"
import { UserIcon } from "@/components/icons/UserIcon"
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"

const schoolData = {
  logo: '/temp/school.webp',
  name: 'Escola Demonstração',
  principal: 'Nabila Azalea',
  phone: '(12) 3456-7890',
  email: 'jordan@mail.com'
}

export const SchoolData = () => {

  return (
    <section className="rounded-xl bg-gray-50 shadow-md relative">
      <div className="h-36 w-full bg-[--bg-primary] rounded-t-xl flex justify-end p-10 overflow-hidden">
        <div className="w-[261px] h-[275px] rounded-full bg-[#FB7D5B] mt-10 -mr-40 " />
        <div className="w-[261px] h-[275px] rounded-full bg-[#FCC43E] " />
      </div>
      <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
        <Image src={schoolData.logo} alt="scholl" width={144} height={144} />
      </div>
      <div className="p-4 mt-14 flex flex-col gap-4 relative">
        <button className="absolute top-0 right-10 text-[--text-primary]"><EditIcon /></button>
        <h5 className="text-2xl font-semibold text-[--text-primary]">{schoolData.name}</h5>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <FieldData field="Admin" value={schoolData.principal} icon={<UserIcon />} />
            <FieldData field="Telefone" value={schoolData.phone} icon={<CallIcon />} />
            <FieldData field="Email" value={schoolData.email} icon={<EmailIcon />} />
          </div>
        </div>
      </div>
    </section>
  )
}


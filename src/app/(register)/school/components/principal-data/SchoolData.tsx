import { EditIcon } from "@/components/icons/EditIcon"
import Image from "next/image"
import { FieldData } from "./FieldData"
import { UserIcon } from "@/components/icons/UserIcon"
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { ISchool } from "@/services/school/ISchool"
import { formatPhone } from "@/utils/formatPhone"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { BookIcon } from "@/components/icons/BookIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"

export const SchoolData = ({ schoolData }: { schoolData: ISchool }) => {

  return (
    <section className=" bg-gray-50 shadow-sm relative w-full">
      <div className="h-36 w-full bg-primary flex justify-end p-10 overflow-hidden">
        <div className="sm:w-[261px] h-[275px] rounded-full bg-[#FB7D5B] mt-10 -mr-40 " />
        <div className="w-[261px] h-[275px] rounded-full bg-[#FCC43E] " />
      </div>
      <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
        {schoolData.logo && <Image src={schoolData.logo} alt="scholl" width={144} height={144} />}
      </div>
      <div className="p-4 mt-14 flex flex-col gap-4 relative">
        <button className="absolute top-0 right-10 text-primary"><EditIcon /></button>
        <h5 className="text-xl font-semibold text-primary">{schoolData.name}</h5>
        <div className="flex items-center justify-between max-sm:flex-col gap-4">
          <FieldData field="Admin" value={schoolData.principal} icon={<UserIcon />} />
          <FieldData field="Telefone" value={formatPhone(schoolData.phone)} icon={<CallIcon />} />
          <FieldData field="Email" value={schoolData.email} icon={<EmailIcon />} />
        </div>
      </div>
      <details open className=" rounded-b-xl bg-gray-50  group">
        <summary className="p-4 flex justify-between border-b bg-primary text-gray-50">
          <span className=" font-semibold text-start w-full flex items-center gap-2"><BookIcon /> Dados da escola</span>
          <DropdownIcon className="w-5" />
        </summary>
        <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
          <FieldData field="Razão social" value={schoolData.corporateName} />
          <FieldData field="CNPJ" value={schoolData.taxId} />
          <FieldData field="Inscrição estadual" value={schoolData.stateRegistration} />
          <FieldData field="Inscrição municipal" value={schoolData.municipalRegistration} />
          <FieldData field="Tipo" value={schoolData.typeOfSchool} />
          <FieldData field="Website" value={schoolData.website} />
        </div>
      </details>
    </section>
  )
}


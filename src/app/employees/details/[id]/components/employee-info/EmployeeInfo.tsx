import { EditIcon } from "@/components/icons/EditIcon"
import Image from "next/image"
import { FieldData } from "../field-data/FieldData"
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { EmployeeDetails } from "../details/EmployeeDatails"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import Link from "next/link"

const employeeData = {
  id: '122',
  image: '/temp/employee.jpg',
  name: 'Thalita Valente',
  address: 'Passagem Dom Jorge, Belém',
  phone: '(12) 3456-7890',
  email: 'jordan@mail.com',
  dateOfBirth: '21/05/2010',
  maritalStatus: 'Solteiro',
  gender: 'FEMALE',
  colorOrRace: 'WHITE',
  document: '888.888.888-88',
  identityCard: '8888888',
  issuingAuthority: 'SSP',
  state: 'PA',
  issueDate: '25/04/2019',
  nickname: 'Tata',
  role: 'TEACHER'
}

export const EmployeeInfo = () => {

  return (
    <section className="rounded-xl bg-gray-50 shadow-md relative flex flex-col gap-4 ">
      <div className=" rounded-b-xl flex flex-col">
        <div className="h-36 w-full bg-[--bg-primary] rounded-t-xl flex justify-end p-10 overflow-hidden">
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FB7D5B] mt-10 -mr-40 " />
          <div className="w-[261px] h-[275px] rounded-full border-[16px] border-[#FCC43E]  " />
        </div>
        <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
          <Image src={employeeData.image} alt="scholl" width={144} height={144} />
        </div>
        <div className="p-4 mt-14 flex flex-col gap-4 relative">
          {/* <button className="absolute top-0 right-10 text-[--text-primary]"><EditIcon /></button> */}
          <div className="flex items-center justify-between">
            <h5 className="text-2xl font-semibold text-[--text-primary]">{employeeData.name}</h5>
            <Link href={`/students/update/${employeeData.id}`} className="shadow-sm text-[--text-primary] text-sm font-semibold  rounded-full h-[40px] px-4 flex items-center gap-1"><EditIcon /> Editar</Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <FieldData field="Endereço" value={employeeData.address} icon={<LocationIcon />} />
              <FieldData field="Telefone" value={employeeData.phone} icon={<CallIcon />} />
              <FieldData field="Email" value={employeeData.email} icon={<EmailIcon />} />
            </div>
          </div>
        </div>
      </div>

      <EmployeeDetails employeeData={employeeData} />
    </section>
  )
}


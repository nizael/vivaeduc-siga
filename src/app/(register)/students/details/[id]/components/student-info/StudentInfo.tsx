import { EditIcon } from "@/components/icons/EditIcon"
import Image from "next/image"
import { FieldData } from "../field-data/FieldData"
import { CallIcon } from "@/components/icons/CallIcon"
import { EmailIcon } from "@/components/icons/EmailIcon"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { StudentDetails } from "../details/StudentDatails"
import { MedicalRecord } from "../medical-record/MedicalRecord"
import Link from "next/link"
import { IStudentInfo } from "../../../../@types/IStudentInfo"
import { IAddress } from "@/types/address/IAddress"
import { AddressDetails } from "@/components/templates/address/AddressDetails"



const studentData = {
  id: '4',
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
  code: '#01242',
  inep: '12456',
}

const medicalRecord = {
  bloodType: 'B+'
}

export const StudentInfo = ({ studentData }: { studentData: IStudentInfo & { address: IAddress } }) => {
  const { address, ...student } = studentData
  return (
    <section className="rounded-xl bg-gray-50 shadow-sm relative flex flex-col gap-4 pb-4">
      <div className="rounded-b-xl bg-gray-50 flex flex-col ">
        <div className="h-36 w-full bg-[--bg-primary] rounded-t-xl flex justify-end p-10 overflow-hidden">
          <div className="w-[261px] h-[275px] rounded-3xl bg-[#FB7D5B] mt-10 -mr-40 " />
          <div className="w-[261px] h-[275px] rounded-3xl bg-[#FCC43E]  " />
        </div>
        <div className="absolute top-36 -translate-y-1/2 left-8 w-36 h-36 rounded-full border-[8px] bg-[#C1BBEB] border-gray-50 overflow-hidden shadow-sm">
          {student.image && <Image src={student.image} alt={student.name} width={144} height={144} />}
        </div>
        <div className="p-4 mt-14 flex flex-col gap-4 relative">
          <div className="flex items-center justify-between">
            <h5 className="text-2xl font-semibold text-[--text-primary]">{student.name}</h5>
            <div className="flex items-center top-0 right-10 gap-4">
              <Link href={'/students/create'} className="shadow-sm text-sm font-semibold text-[--text-primary] rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Nova matrícula</Link>
              <Link href={`/students/update/${student.id}`} className="shadow-sm text-[--text-primary] text-sm font-semibold  rounded-full h-[40px] px-4 flex items-center gap-1"><EditIcon /> Editar</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-20">
              <FieldData field="Endereço" value={`${address.street}, ${address.city}`} icon={<LocationIcon />} />
              <FieldData field="Telefone" value={student.phone} icon={<CallIcon />} />
              <FieldData field="Email" value={student.email} icon={<EmailIcon />} />
            </div>
          </div>
        </div>
      </div>
      <StudentDetails student={student} />
      <AddressDetails address={address} />
      <MedicalRecord medicalRecord={medicalRecord} />
    </section>
  )
}


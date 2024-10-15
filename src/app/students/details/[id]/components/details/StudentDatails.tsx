import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditiIcon"

interface IStudentDetails {
  id: string
  image: string
  name: string
  address: string
  phone: string
  email: string
  dateOfBirth: string
  maritalStatus: string
  gender: string
  colorOrRace: string
  document: string
  identityCard: string
  issuingAuthority: string
  state: string
  issueDate: string
  code: string
  inep: string
}
export const StudentDetails = ({ studentData }: { studentData: IStudentDetails }) => {
  return (
      <details open className=" rounded-b-x ">
        <summary className="p-4 grid grid-cols-3 border-t  place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon/> Dados pessoais</span> <DotsIcon /> <span /></summary>
        <div className="relative grid grid-cols-4 gap-4  p-4">
          <FieldData field="Matrícula" value={studentData?.code || '-'} />
          <FieldData field="INEP" value={studentData?.inep || '-'} />
          <FieldData field="Data de nascimento" value={studentData?.dateOfBirth || '-'} />
          <FieldData field="Estado civil" value={studentData?.maritalStatus || '-'} />
          <FieldData field="Sexo" value={studentData?.gender || '-'} />
          <FieldData field="Cor/Raça" value={studentData?.colorOrRace || '-'} />
          <FieldData field="CPF" value={studentData?.document || '-'} />
          <FieldData field="Identidade" value={studentData?.identityCard || '-'} />
          <FieldData field="Orgão emissor" value={studentData?.issuingAuthority || '-'} />
          <FieldData field="Data de emissão" value={studentData?.issueDate || '-'} />
          <FieldData field="UF" value={studentData?.state || '-'} />
        </div>
      </details>
  )
}
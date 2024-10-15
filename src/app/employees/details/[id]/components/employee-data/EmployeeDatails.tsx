import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "./FieldData"
import { UserEditIcon } from "@/components/icons/UserEditiIcon"

interface IEmployeeDetails {
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
  role: string
  nickname: string
}

export const EmployeeDetails = ({ employeeData }: { employeeData: IEmployeeDetails }) => {
  return (
    <details className=" rounded-b-xl bg-gray-50  group">
        <summary className="px-4 grid grid-cols-3 bg-[--bg-tertiary] place-items-center text-gray-500 py-2"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon/> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-6">
        <FieldData field="Data de nascimento" value={employeeData.dateOfBirth} />
        <FieldData field="Estado civil" value={employeeData.maritalStatus} />
        <FieldData field="Sexo" value={employeeData.gender} />
        <FieldData field="Cor/Raça" value={employeeData.colorOrRace} />
        <FieldData field="CPF" value={employeeData.document} />
        <FieldData field="Identidade" value={employeeData.identityCard} />
        <FieldData field="Orgão emissor" value={employeeData.issuingAuthority} />
        <FieldData field="Data de emissão" value={employeeData.issueDate} />
        <FieldData field="UF" value={employeeData.state} />
        <FieldData field="Cargo" value={employeeData.role} />
        <FieldData field="Apelido" value={employeeData.nickname} />
        <FieldData field="Telefone de trabalho" value="(91) 9 8173-0582" />
      </div>
    </details>
  )
}
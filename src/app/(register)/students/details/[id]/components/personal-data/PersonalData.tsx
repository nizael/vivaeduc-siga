import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { IStudent } from "../../../../@types/IStudentInfo"
import { maritalStatus } from "@/configs/maritalStatus"
import { gender } from "@/configs/gender"
import { colorOrRace } from "@/configs/colorOrRace"
import { DropdownIcon } from "@/components/icons/DropdownIcon"


export const PersonalData = ({ student }: { student: IStudent }) => {
  return (
    <details open className="">
      <summary className="px-4 py-2 flex justify-between border-b bg-primary text-gray-50">
        <span className="font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span>
        <DropdownIcon className="w-5" />
      </summary>
      <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
        <FieldData field="Matrícula" value={student?.code || '-'} />
        <FieldData field="INEP" value={student?.inep || '-'} />
        <FieldData field="Data de nascimento" value={student?.dateOfBirth || '-'} />
        <FieldData field="Estado civil" value={maritalStatus[student.maritalStatus as keyof typeof maritalStatus] || '-'} />
        <FieldData field="Sexo" value={gender[student.gender as keyof typeof gender] || '-'} />
        <FieldData field="Cor/Raça" value={colorOrRace[student.colorOrRace as keyof typeof colorOrRace] || '-'} />
        <FieldData field="CPF" value={`***.***.***-${student.document.slice(-2)}` || '-'} />
        <FieldData field="Identidade" value={`******${student.identityCard.slice(-2)}` || '-'} />
        <FieldData field="Orgão emissor" value={student?.issuingAuthority || '-'} />
        <FieldData field="Data de emissão" value={student?.issueDate || '-'} />
        <FieldData field="UF" value={student?.state || '-'} />
      </div>
    </details>
  )
}
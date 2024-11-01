import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { IStudentInfo } from "../../../../@types/IStudentInfo"
import { maritalStatus } from "@/configs/maritalStatus"
import { gender } from "@/configs/gender"
import { colorOrRace } from "@/configs/colorOrRace"


export const StudentDetails = ({ student }: { student: IStudentInfo }) => {
  return (
    <details open className="">
      <summary className="px-4 py-2 grid grid-cols-3 border-t bg-primary place-items-center text-gray-50"><span className="font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
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
import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { formatPhone } from "@/utils/formatPhone"
import { InputEdit } from "../InputEdit"
import { SelectEdit } from "../SelectEdit"
import { colorOrRace, colorOrRaceOptions } from "@/configs/colorOrRace"
import { gender } from "@/configs/gender"
import { maritalStatus, maritalStatusOptions } from "@/configs/maritalStatus"
import { IStudentInfo } from "../../../../@types/IStudentInfo"


export const StudentDetails = ({ student }: { student: IStudentInfo }) => {
  return (
    <details open className=" rounded-b-xl bg-gray-50 ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="name" >
          <FieldData id="name" field="Nome completo" value={student.name} />
        </InputEdit>
        <InputEdit name='dateOfBirth' >
          <FieldData id="dateOfBirth" field="Data de nascimento" value={student.dateOfBirth} />
        </InputEdit>
        <SelectEdit name='maritalStatus' options={maritalStatusOptions} >
          <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[student.maritalStatus as keyof typeof maritalStatus]} />
        </SelectEdit>
        <InputEdit name='gender' >
          <FieldData id="gender" field="Sexo" value={gender[student.gender as keyof typeof gender]} />
        </InputEdit>
        <SelectEdit name='colorOrRace' options={colorOrRaceOptions} >
          <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[student.colorOrRace as keyof typeof colorOrRace]} />
        </SelectEdit>
        <InputEdit name='document' >
          <FieldData id="document" field="CPF" value={`***.***.***-${student.document.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='identityCard' >
          <FieldData id="identityCard" field="Identidade" value={`******${student.identityCard.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='issuingAuthority' >
          <FieldData id="issuingAuthority" field="Orgão emissor" value={student.issuingAuthority} />
        </InputEdit>
        <InputEdit name='issueDate' >
          <FieldData id="issueDate" field="Data de emissão" value={student.issueDate} />
        </InputEdit>
        <InputEdit name='state' >
          <FieldData id="state" field="UF" value={student.state} />
        </InputEdit>
        <InputEdit name='email' type="email">
          <FieldData id="email" field="Email" value={student.email} />
        </InputEdit>
        <InputEdit name='phone' >
          <FieldData id="phone" field="Celular" value={formatPhone(student.phone)} />
        </InputEdit>
      </div>
    </details>
  )
}
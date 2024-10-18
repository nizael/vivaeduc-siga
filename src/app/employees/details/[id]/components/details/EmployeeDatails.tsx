import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { maritalStatus } from "@/configs/maritalStatus"
import { gender } from "@/configs/gender"
import { colorOrRace } from "@/configs/colorOrRace"
import { employeeRole } from "@/configs/employeeRole"
import { IEmployeeInfo } from "../../../../@types/IEmployeeInfo"

export const EmployeeDetails = ({ employee }: { employee: IEmployeeInfo }) => {
  return (
      <details open className=" rounded-b-xl bg-gray-50  group">
        <summary className="p-4 grid grid-cols-3 border-t place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
        <div className="relative grid grid-cols-4 gap-4  p-4">
          <FieldData field="Data de nascimento" value={employee.dateOfBirth} />
          <FieldData field="Estado civil" value={maritalStatus[employee.maritalStatus as keyof typeof maritalStatus]} />
          <FieldData field="Sexo" value={gender[employee.gender as keyof typeof gender]} />
          <FieldData field="Cor/Raça" value={colorOrRace[employee.colorOrRace as keyof typeof colorOrRace]} />
          <FieldData field="CPF" value={`***.***.***-${employee.document.slice(-2)}`} />
          <FieldData field="Identidade" value={`******${employee.identityCard.slice(-2)}`} />
          <FieldData field="Orgão emissor" value={employee.issuingAuthority} />
          <FieldData field="Data de emissão" value={employee.issueDate} />
          <FieldData field="UF" value={employee.state} />
          <FieldData field="Cargo" value={employeeRole[employee.role as keyof typeof employeeRole]} />
          <FieldData field="Apelido" value={employee.nickname} />
        </div>
      </details>
  )
}
import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import {  } from "../employee-info/EmployeeInfo"
import { formatPhone } from "@/utils/formatPhone"
import { InputEdit } from "../InputEdit"
import { SelectEdit } from "../SelectEdit"
import { colorOrRaceOptions, employeeRoleOptions, maritalStatusOptions } from "../../../../create/components/FormEmployee"
import { colorOrRace } from "@/configs/colorOrRace"
import { employeeRole } from "@/configs/employeeRole"
import { gender } from "@/configs/gender"
import { maritalStatus } from "@/configs/maritalStatus"
import { IEmployeeInfo } from "../../../../@types/IEmployeeInfo"


export const EmployeeDetails = ({ employee }: { employee: IEmployeeInfo }) => {
  return (
      <details open className=" rounded-b-xl bg-gray-50 ">
        <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
        <div className="relative grid grid-cols-4 gap-4  p-4">
          <InputEdit name="name" >
            <FieldData id="name" field="Nome completo" value={employee.name} />
          </InputEdit>
          <InputEdit name='dateOfBirth' >
            <FieldData id="dateOfBirth" field="Data de nascimento" value={employee.dateOfBirth} />
          </InputEdit>
          <SelectEdit name='maritalStatus' options={maritalStatusOptions} >
            <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[employee.maritalStatus as keyof typeof maritalStatus]} />
          </SelectEdit>
          <InputEdit name='gender' >
            <FieldData id="gender" field="Sexo" value={gender[employee.gender as keyof typeof gender]} />
          </InputEdit>
          <SelectEdit name='colorOrRace' options={colorOrRaceOptions} >
            <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[employee.colorOrRace as keyof typeof colorOrRace]} />
          </SelectEdit>
          <InputEdit name='document' >
            <FieldData id="document" field="CPF" value={`***.***.***-${employee.document.slice(-2)}`} />
          </InputEdit>
          <InputEdit name='identityCard' >
            <FieldData id="identityCard" field="Identidade" value={`******${employee.identityCard.slice(-2)}`} />
          </InputEdit>
          <InputEdit name='issuingAuthority' >
            <FieldData id="issuingAuthority" field="Orgão emissor" value={employee.issuingAuthority} />
          </InputEdit>
          <InputEdit name='issueDate' >
            <FieldData id="issueDate" field="Data de emissão" value={employee.issueDate} />
          </InputEdit>
          <InputEdit name='state' >
            <FieldData id="state" field="UF" value={employee.state} />
          </InputEdit>
          <SelectEdit name='role' options={employeeRoleOptions} >
            <FieldData id="role" field="Cargo" value={employeeRole[employee.role as keyof typeof employeeRole]} />
          </SelectEdit>
          <InputEdit name='nickname' >
            <FieldData id="nickname" field="Apelido" value={employee.nickname} />
          </InputEdit>
          <InputEdit name='phone' >
            <FieldData id="phone" field="Celular" value={formatPhone(employee.phone)} />
          </InputEdit>
          <InputEdit name='email' type="email">
            <FieldData id="email" field="Email" value={employee.email} />
          </InputEdit>
        </div>
      </details>
  )
}
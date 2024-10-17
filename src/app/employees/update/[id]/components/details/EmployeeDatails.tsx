import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditiIcon"
import { IEmployeeInfo } from "../employee-info/EmployeeInfo"
import { EmployeeAddress } from "./EmployeeAddress"
import { formatPhone } from "@/utils/formatPhone"
import { InputEdit } from "../EmputEdit"
import { SelectEdit } from "../SelectEdit"
import { colorOrRaceOptions, employeeRoleOptions, maritalStatusOptions } from "../../../../create/components/FormEmployee"

const maritalStatus = {
  SINGLE: "Solteiro",
  MARRIED: "Casado",
  DIVORCED: "Divorciado",
  WINDOWED: "Viúvo",
}

const colorOrRace = {
  YELLOW: "Amamrelo",
  WHITE: "Branco",
  BROWN: "Pardo",
  BLACK: "Preto",
  INDIGENOUS: "Índigena",
}

const employeeRole = {
  TEACHER: "Professor(a)",
  COORDINATOR: "Coordenador(a)",
  SECRETARY: "Secretário(a)",
  ASSISTAN: "Assistente",
  ADVISOR: "Orientador(a)",
  PRINCIPAL: "Diretor(a)"
}

const gender = {
  MALE: 'Masculino',
  FEMALE: 'Femenino'
}

export const EmployeeDetails = ({ employeeData }: { employeeData: IEmployeeInfo }) => {
  return (
    <>
      <details open className=" rounded-b-xl bg-gray-50 ">
        <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
        <div className="relative grid grid-cols-4 gap-4  p-4">
          <InputEdit name="name" >
            <FieldData id="name" field="Nome completo" value={employeeData.name} />
          </InputEdit>
          <InputEdit name='dateOfBirth' >
            <FieldData id="dateOfBirth" field="Data de nascimento" value={employeeData.dateOfBirth} />
          </InputEdit>
          <SelectEdit name='maritalStatus' options={maritalStatusOptions} >
            <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[employeeData.maritalStatus as keyof typeof maritalStatus]} />
          </SelectEdit>
          <InputEdit name='gender' >
            <FieldData id="gender" field="Sexo" value={gender[employeeData.gender as keyof typeof gender]} />
          </InputEdit>
          <SelectEdit name='colorOrRace' options={colorOrRaceOptions} >
            <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[employeeData.colorOrRace as keyof typeof colorOrRace]} />
          </SelectEdit>
          <InputEdit name='document' >
            <FieldData id="document" field="CPF" value={`***.***.***-${employeeData.document.slice(-2)}`} />
          </InputEdit>
          <InputEdit name='identityCard' >
            <FieldData id="identityCard" field="Identidade" value={`******${employeeData.identityCard.slice(-2)}`} />
          </InputEdit>
          <InputEdit name='issuingAuthority' >
            <FieldData id="issuingAuthority" field="Orgão emissor" value={employeeData.issuingAuthority} />
          </InputEdit>
          <InputEdit name='issueDate' >
            <FieldData id="issueDate" field="Data de emissão" value={employeeData.issueDate} />
          </InputEdit>
          <InputEdit name='state' >
            <FieldData id="state" field="UF" value={employeeData.state} />
          </InputEdit>
          <SelectEdit name='role' options={employeeRoleOptions} >
            <FieldData id="role" field="Cargo" value={employeeRole[employeeData.role as keyof typeof employeeRole]} />
          </SelectEdit>
          <InputEdit name='nickname' >
            <FieldData id="nickname" field="Apelido" value={employeeData.nickname} />
          </InputEdit>
          <InputEdit name='phone' >
            <FieldData id="phone" field="Celular" value={formatPhone(employeeData.phone)} />
          </InputEdit>
          <InputEdit name='email' type="email">
            <FieldData id="email" field="Email" value={employeeData.email} />
          </InputEdit>
        </div>
      </details>
      <EmployeeAddress employeeAddress={employeeData.address} />

    </>
  )
}
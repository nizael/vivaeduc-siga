import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditiIcon"
import { IEmployeeInfo } from "../employee-info/EmployeeInfo"
import { EmployeeAddress } from "./EmployeeAddress"

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
      <details open className=" rounded-b-xl bg-gray-50  group">
        <summary className="p-4 grid grid-cols-3 border-t place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
        <div className="relative grid grid-cols-4 gap-4  p-4">
          <FieldData field="Data de nascimento" value={employeeData.dateOfBirth} />
          <FieldData field="Estado civil" value={maritalStatus[employeeData.maritalStatus as keyof typeof maritalStatus]} />
          <FieldData field="Sexo" value={gender[employeeData.gender as keyof typeof gender]} />
          <FieldData field="Cor/Raça" value={colorOrRace[employeeData.colorOrRace as keyof typeof colorOrRace]} />
          <FieldData field="CPF" value={`***.***.***-${employeeData.document.slice(-2)}`} />
          <FieldData field="Identidade" value={`******${employeeData.identityCard.slice(-2)}`} />
          <FieldData field="Orgão emissor" value={employeeData.issuingAuthority} />
          <FieldData field="Data de emissão" value={employeeData.issueDate} />
          <FieldData field="UF" value={employeeData.state} />
          <FieldData field="Cargo" value={employeeRole[employeeData.role as keyof typeof employeeRole]} />
          <FieldData field="Apelido" value={employeeData.nickname} />
        </div>
      </details>
      <EmployeeAddress employeeAddress={employeeData.address} />

    </>
  )
}
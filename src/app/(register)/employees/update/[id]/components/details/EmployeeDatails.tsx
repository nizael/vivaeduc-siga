'use client'
import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { formatPhone } from "@/utils/formatPhone"
import { colorOrRace, colorOrRaceOptions } from "@/configs/colorOrRace"
import { employeeRole, employeeRoleOptions } from "@/configs/employeeRole"
import { gender, genderOptions } from "@/configs/gender"
import { maritalStatus, maritalStatusOptions } from "@/configs/maritalStatus"
import { employeeUpdate } from "@/services/employee/employeeUpdate"
import { InputEdit } from "@/components/inputs/InputEdit"
import { useUpdateEmployeesStore } from "../../../../stores/useUpdateEmployeesStore"
import { SelectEdit } from "@/components/selects/SelectEdit"


export const EmployeeDetails = () => {
  const {employee, updateAttribute } = useUpdateEmployeesStore()

  async function handleUpdatePersonal(evt: React.FormEvent<HTMLFormElement>, field: string) {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const value = formData.get(field)?.toString()

    if (value && employee) {
      const data = { [`${field}`]: value }
      const result = await employeeUpdate(data, employee.id)
      if (result.status === 200) updateAttribute({ [`${field}`]: value })
    }
  }

  if (!employee) return null
  return (
    <details open className=" bg-gray-50 ">
      <summary className="px-4 py-2 grid grid-cols-3 border-b place-items-center bg-primary text-gray-50"><span className="font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="name" onSubmit={evt => handleUpdatePersonal(evt, 'name')} defaultValue={employee.name} >
          <FieldData id="name" field="Nome completo" value={employee?.name} />
        </InputEdit>
        <InputEdit name='dateOfBirth' onSubmit={evt => handleUpdatePersonal(evt, 'dateOfBirth')} defaultValue={employee.dateOfBirth}>
          <FieldData id="dateOfBirth" field="Data de nascimento" value={employee.dateOfBirth} />
        </InputEdit>
        <SelectEdit name='maritalStatus' options={maritalStatusOptions} defaultValue={employee.maritalStatus} onSubmit={evt => handleUpdatePersonal(evt, 'maritalStatus')} >
          <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[employee.maritalStatus as keyof typeof maritalStatus]} />
        </SelectEdit>
        <SelectEdit name='gender' options={genderOptions} defaultValue={employee.gender} onSubmit={evt => handleUpdatePersonal(evt, 'gender')}>
          <FieldData id="gender" field="Sexo" value={gender[employee.gender as keyof typeof gender]} />
        </SelectEdit>
        <SelectEdit name='colorOrRace' options={colorOrRaceOptions} defaultValue={employee.colorOrRace} onSubmit={evt => handleUpdatePersonal(evt, 'colorOrRace')} >
          <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[employee.colorOrRace as keyof typeof colorOrRace]} />
        </SelectEdit>
        <InputEdit name='document' type="number" defaultValue={employee.document.replace(/\D/g, '')} onSubmit={evt => handleUpdatePersonal(evt, 'document')}>
          <FieldData id="document" field="CPF" value={`***.***.***-${employee.document.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='identityCard' defaultValue={employee.identityCard} onSubmit={evt => handleUpdatePersonal(evt, 'identityCard')}>
          <FieldData id="identityCard" field="Identidade" value={`******${employee.identityCard.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='issuingAuthority' defaultValue={employee.issuingAuthority} onSubmit={evt => handleUpdatePersonal(evt, 'issuingAuthority')}>
          <FieldData id="issuingAuthority" field="Orgão emissor" value={employee.issuingAuthority} />
        </InputEdit>
        <InputEdit name='issueDate' defaultValue={employee.issueDate} onSubmit={evt => handleUpdatePersonal(evt, 'issueDate')}>
          <FieldData id="issueDate" field="Data de emissão" value={employee.issueDate} />
        </InputEdit>
        <InputEdit name='state' defaultValue={employee.state} onSubmit={evt => handleUpdatePersonal(evt, 'state')}>
          <FieldData id="state" field="UF" value={employee.state} />
        </InputEdit>
        <SelectEdit name='role' options={employeeRoleOptions} defaultValue={employee.role} onSubmit={evt => handleUpdatePersonal(evt, 'role')} >
          <FieldData id="role" field="Cargo" value={employeeRole[employee.role as keyof typeof employeeRole]} />
        </SelectEdit>
        <InputEdit name='nickname' defaultValue={employee.nickname} onSubmit={evt => handleUpdatePersonal(evt, 'nickname')}>
          <FieldData id="nickname" field="Apelido" value={employee.nickname} />
        </InputEdit>
        <InputEdit name='phone' defaultValue={employee.phone} onSubmit={evt => handleUpdatePersonal(evt, 'phone')}>
          <FieldData id="phone" field="Celular" value={formatPhone(employee.phone)} />
        </InputEdit>
        <InputEdit name='email' defaultValue={employee.email} type="email" onSubmit={evt => handleUpdatePersonal(evt, 'email')}>
          <FieldData id="email" field="Email" value={employee.email} />
        </InputEdit>
      </div>
    </details>
  )
}
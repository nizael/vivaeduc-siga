import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { formatPhone } from "@/utils/formatPhone"
import { colorOrRace, colorOrRaceOptions } from "@/configs/colorOrRace"
import { gender, genderOptions } from "@/configs/gender"
import { maritalStatus, maritalStatusOptions } from "@/configs/maritalStatus"
import { useUpdateStudentStore } from "../../../../stores/useUpdateStudentStore"
import { studentUpdate } from "@/services/student/studentUpdate"
import { InputEdit } from "@/components/inputs/InputEdit"
import { SelectEdit } from "@/components/selects/SelectEdit"
import { DropdownIcon } from "@/components/icons/DropdownIcon"


export const StudentDetails = () => {

  const { student, updateAttribute } = useUpdateStudentStore()

  async function handleUpdatePersonal(evt: React.FormEvent<HTMLFormElement>, field: string) {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const value = formData.get(field)?.toString()

    if (value && student) {
      const data = { [`${field}`]: value }
      const result = await studentUpdate(data, student.id)
      if (result.status === 200) updateAttribute({ [`${field}`]: value })
    }
  }

  if (!student) return null

  return (
    <details open className="  bg-gray-50 ">
      <summary className="px-4 py-2 flex justify-between border-b bg-primary text-gray-50">
        <span className="font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span>
        <DropdownIcon className="w-5" />
      </summary>
      <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
        <InputEdit name="name" onSubmit={evt => handleUpdatePersonal(evt, 'name')} defaultValue={student.name}>
          <FieldData id="name" field="Nome completo" value={student.name} />
        </InputEdit>
        <InputEdit name='dateOfBirth' type="date" onSubmit={evt => handleUpdatePersonal(evt, 'dateOfBirth')} defaultValue={student.dateOfBirth}>
          <FieldData id="dateOfBirth" field="Data de nascimento" value={`${new Date(student.dateOfBirth).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`} />
        </InputEdit>
        <SelectEdit name='maritalStatus' options={maritalStatusOptions} defaultValue={student.maritalStatus} onSubmit={evt => handleUpdatePersonal(evt, 'maritalStatus')} >
          <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[student.maritalStatus as keyof typeof maritalStatus]} />
        </SelectEdit>
        <SelectEdit name='gender' options={genderOptions} defaultValue={student.gender} onSubmit={evt => handleUpdatePersonal(evt, 'gender')}>
          <FieldData id="gender" field="Sexo" value={gender[student.gender as keyof typeof gender]} />
        </SelectEdit>
        <SelectEdit name='colorOrRace' options={colorOrRaceOptions} defaultValue={student.colorOrRace} onSubmit={evt => handleUpdatePersonal(evt, 'colorOrRace')}>
          <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[student.colorOrRace as keyof typeof colorOrRace]} />
        </SelectEdit>
        <InputEdit name='document' type="number" defaultValue={student.document?.replace(/\D/g, '')} onSubmit={evt => handleUpdatePersonal(evt, 'document')} >
          <FieldData id="document" field="CPF" value={`***.***.***-${student.document?.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='identityCard' defaultValue={student.identityCard} onSubmit={evt => handleUpdatePersonal(evt, 'identityCard')}>
          <FieldData id="identityCard" field="Identidade" value={`******${student.identityCard?.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='issuingAuthority' defaultValue={student.issuingAuthority} onSubmit={evt => handleUpdatePersonal(evt, 'issuingAuthority')} >
          <FieldData id="issuingAuthority" field="Orgão emissor" value={student.issuingAuthority} />
        </InputEdit>
        <InputEdit name='issueDate' type="date" defaultValue={student.issueDate} onSubmit={evt => handleUpdatePersonal(evt, 'issueDate')}>
          <FieldData id="issueDate" field="Data de emissão" value={student.issueDate ? `${new Date(student.issueDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}` : '-'} />
        </InputEdit>
        <InputEdit name='state' defaultValue={student.state} onSubmit={evt => handleUpdatePersonal(evt, 'state')}>
          <FieldData id="state" field="UF" value={student.state} />
        </InputEdit>
        <InputEdit name='email' type="email" defaultValue={student.email} onSubmit={evt => handleUpdatePersonal(evt, 'email')} >
          <FieldData id="email" field="Email" value={student.email} />
        </InputEdit>
        <InputEdit name='phone' defaultValue={student.phone} onSubmit={evt => handleUpdatePersonal(evt, 'phone')}>
          <FieldData id="phone" field="Celular" value={formatPhone(student.phone)} />
        </InputEdit>
      </div>
    </details>
  )
}
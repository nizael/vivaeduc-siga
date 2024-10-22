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


export const StudentDetails = () => {

  const { student, updateAttribute } = useUpdateStudentStore()

  async function updatePersonalDataInputEdit(evt: React.FormEvent<HTMLFormElement>, field: string) {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const value = formData.get(field)?.toString()

    if (value && student) {
      const data = { [`${field}`]: value }
      const result = await studentUpdate(data, student.id)
      if (result.status === 200) updateAttribute({ [`${field}`]: value })
    }
  }

  async function updatePersonalDataSelectEdit(evt: React.FormEvent<HTMLFormElement>, field: string) {
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
    <details open className=" rounded-b-xl bg-gray-50 ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="name" onSubmit={evt => updatePersonalDataInputEdit(evt, 'name')} defaultValue={student.name}>
          <FieldData id="name" field="Nome completo" value={student.name} />
        </InputEdit>
        <InputEdit name='dateOfBirth' onSubmit={evt => updatePersonalDataInputEdit(evt, 'dateOfBirth')} defaultValue={student.dateOfBirth}>
          <FieldData id="dateOfBirth" field="Data de nascimento" value={student.dateOfBirth} />
        </InputEdit>
        <SelectEdit name='maritalStatus' options={maritalStatusOptions} defaultValue={student.maritalStatus} onSubmit={evt => updatePersonalDataSelectEdit(evt, 'maritalStatus')} >
          <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[student.maritalStatus as keyof typeof maritalStatus]} />
        </SelectEdit>
        <SelectEdit name='gender' options={genderOptions} defaultValue={student.gender} onSubmit={evt => updatePersonalDataSelectEdit(evt, 'gender')}>
          <FieldData id="gender" field="Sexo" value={gender[student.gender as keyof typeof gender]} />
        </SelectEdit>
        <SelectEdit name='colorOrRace' options={colorOrRaceOptions} defaultValue={student.colorOrRace} onSubmit={evt => updatePersonalDataSelectEdit(evt, 'colorOrRace')}>
          <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[student.colorOrRace as keyof typeof colorOrRace]} />
        </SelectEdit>
        <InputEdit name='document' type="number" defaultValue={student.document.replace(/\D/g, '')} onSubmit={evt => updatePersonalDataInputEdit(evt, 'document')} >
          <FieldData id="document" field="CPF" value={`***.***.***-${student.document.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='identityCard' defaultValue={student.identityCard} onSubmit={evt => updatePersonalDataInputEdit(evt, 'identityCard')}>
          <FieldData id="identityCard" field="Identidade" value={`******${student.identityCard.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='issuingAuthority' defaultValue={student.issuingAuthority} onSubmit={evt => updatePersonalDataInputEdit(evt, 'issuingAuthority')} >
          <FieldData id="issuingAuthority" field="Orgão emissor" value={student.issuingAuthority} />
        </InputEdit>
        <InputEdit name='issueDate' type="date" defaultValue={student.issueDate} onSubmit={evt => updatePersonalDataInputEdit(evt, 'issueDate')}>
          <FieldData id="issueDate" field="Data de emissão" value={student.issueDate} />
        </InputEdit>
        <InputEdit name='state' defaultValue={student.state} onSubmit={evt => updatePersonalDataInputEdit(evt, 'state')}>
          <FieldData id="state" field="UF" value={student.state} />
        </InputEdit>
        <InputEdit name='email' type="email" defaultValue={student.email} onSubmit={evt => updatePersonalDataInputEdit(evt, 'email')} >
          <FieldData id="email" field="Email" value={student.email} />
        </InputEdit>
        <InputEdit name='phone' defaultValue={student.phone} onSubmit={evt => updatePersonalDataInputEdit(evt, 'phone')}>
          <FieldData id="phone" field="Celular" value={formatPhone(student.phone)} />
        </InputEdit>
      </div>
    </details>
  )
}
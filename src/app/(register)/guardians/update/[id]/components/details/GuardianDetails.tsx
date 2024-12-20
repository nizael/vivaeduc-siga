import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { formatPhone } from "@/utils/formatPhone"
import { colorOrRace, colorOrRaceOptions } from "@/configs/colorOrRace"
import { gender, genderOptions } from "@/configs/gender"
import { maritalStatus, maritalStatusOptions } from "@/configs/maritalStatus"
import { useUpdateGuardianStore } from "../../../../stores/useUpdateGuardianStore"
import { guardianUpdate } from "@/services/guardian/guardianUpdate"
import { InputEdit } from "@/components/inputs/InputEdit"
import { SelectEdit } from "@/components/selects/SelectEdit"
import { DropdownIcon } from "@/components/icons/DropdownIcon"


export const GuardianDetails = () => {
  const { guardian, updateAttribute } = useUpdateGuardianStore()

  async function handleUpdatePersonal(evt: React.FormEvent<HTMLFormElement>, field: string) {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const value = formData.get(field)?.toString()
    if (value && guardian) {
      const data = { [`${field}`]: value }
      const result = await guardianUpdate(data, guardian.id)
      if (result.status === 200) updateAttribute({ [`${field}`]: value })
    }
  }


  if (!guardian) return null
  return (
    <details open className=" rounded-b-xl bg-gray-50 ">
      <summary className="px-4 py-2 flex justify-between border-b bg-primary text-gray-50">
        <span className=" font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span>
        <DropdownIcon className="w-5" />
      </summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="name" onSubmit={evt => handleUpdatePersonal(evt, 'name')} defaultValue={guardian.name} >
          <FieldData id="name" field="Nome completo" value={guardian.name} />
        </InputEdit>
        <InputEdit name='dateOfBirth' type="date" onSubmit={evt => handleUpdatePersonal(evt, 'dateOfBirth')} defaultValue={guardian.dateOfBirth}>
          <FieldData id="dateOfBirth" field="Data de nascimento" value={`${new Date(guardian.dateOfBirth).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`} />
        </InputEdit>
        <SelectEdit name='maritalStatus' options={maritalStatusOptions} defaultValue={guardian.maritalStatus} onSubmit={evt => handleUpdatePersonal(evt, 'maritalStatus')} >
          <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[guardian.maritalStatus as keyof typeof maritalStatus]} />
        </SelectEdit>
        <SelectEdit name='gender' options={genderOptions} defaultValue={guardian.gender} onSubmit={evt => handleUpdatePersonal(evt, 'gender')}>
          <FieldData id="gender" field="Sexo" value={gender[guardian.gender as keyof typeof gender]} />
        </SelectEdit>
        <SelectEdit name='colorOrRace' options={colorOrRaceOptions} defaultValue={guardian.colorOrRace} onSubmit={evt => handleUpdatePersonal(evt, 'colorOrRace')} >
          <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[guardian.colorOrRace as keyof typeof colorOrRace]} />
        </SelectEdit>
        <InputEdit name='document' type="number" defaultValue={guardian.document.replace(/\D/g, '')} onSubmit={evt => handleUpdatePersonal(evt, 'document')}>
          <FieldData id="document" field="CPF" value={`***.***.***-${guardian.document.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='identityCard' defaultValue={guardian.identityCard} onSubmit={evt => handleUpdatePersonal(evt, 'identityCard')}>
          <FieldData id="identityCard" field="Identidade" value={`******${guardian.identityCard.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='issuingAuthority' defaultValue={guardian.issuingAuthority} onSubmit={evt => handleUpdatePersonal(evt, 'issuingAuthority')}>
          <FieldData id="issuingAuthority" field="Orgão emissor" value={guardian.issuingAuthority} />
        </InputEdit>
        <InputEdit type="date" name='issueDate' defaultValue={guardian.issueDate} onSubmit={evt => handleUpdatePersonal(evt, 'issueDate')}>
          <FieldData id="issueDate" field="Data de emissão" value={`${new Date(guardian.issueDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}`} />
        </InputEdit>
        <InputEdit name='state' defaultValue={guardian.state} onSubmit={evt => handleUpdatePersonal(evt, 'state')}>
          <FieldData id="state" field="UF" value={guardian.state} />
        </InputEdit>
        <InputEdit name='phone' defaultValue={guardian.phone} onSubmit={evt => handleUpdatePersonal(evt, 'phone')} >
          <FieldData id="phone" field="Celular" value={formatPhone(guardian.phone)} />
        </InputEdit>
        <InputEdit name='email' type="email" defaultValue={guardian.email} onSubmit={evt => handleUpdatePersonal(evt, 'email')} >
          <FieldData id="email" field="Email" value={guardian.email} />
        </InputEdit>
        <InputEdit name='profession' defaultValue={guardian.profession} onSubmit={evt => handleUpdatePersonal(evt, 'profession')}>
          <FieldData id="profession" field="Profissão" value={guardian.profession} />
        </InputEdit>
        <InputEdit name='workplace' defaultValue={guardian.workplace} onSubmit={evt => handleUpdatePersonal(evt, 'workplace')} >
          <FieldData id="workplace" field="Empresa que trabalho" value={guardian.workplace} />
        </InputEdit>
        <InputEdit name='workPhone' defaultValue={guardian.workPhone} onSubmit={evt => handleUpdatePersonal(evt, 'workPhone')} >
          <FieldData id="workPhone" field="Celular da empresa" value={formatPhone(guardian.workPhone)} />
        </InputEdit>
      </div>
    </details>
  )
}
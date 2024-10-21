import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { formatPhone } from "@/utils/formatPhone"
import { InputEdit } from "../InputEdit"
import { SelectEdit } from "../SelectEdit"
import { colorOrRace, colorOrRaceOptions } from "@/configs/colorOrRace"
import { gender } from "@/configs/gender"
import { maritalStatus, maritalStatusOptions } from "@/configs/maritalStatus"
import { IGuardianInfo } from "../../../../@types/IGuardianInfo"


export const GuardianDetails = ({ guardian }: { guardian: IGuardianInfo }) => {
  return (
    <details open className=" rounded-b-xl bg-gray-50 ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="name" >
          <FieldData id="name" field="Nome completo" value={guardian.name} />
        </InputEdit>
        <InputEdit name='dateOfBirth' >
          <FieldData id="dateOfBirth" field="Data de nascimento" value={guardian.dateOfBirth} />
        </InputEdit>
        <SelectEdit name='maritalStatus' options={maritalStatusOptions} >
          <FieldData id="maritalStatus" field="Estado civil" value={maritalStatus[guardian.maritalStatus as keyof typeof maritalStatus]} />
        </SelectEdit>
        <InputEdit name='gender' >
          <FieldData id="gender" field="Sexo" value={gender[guardian.gender as keyof typeof gender]} />
        </InputEdit>
        <SelectEdit name='colorOrRace' options={colorOrRaceOptions} >
          <FieldData id="colorOrRace" field="Cor/Raça" value={colorOrRace[guardian.colorOrRace as keyof typeof colorOrRace]} />
        </SelectEdit>
        <InputEdit name='document' >
          <FieldData id="document" field="CPF" value={`***.***.***-${guardian.document.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='identityCard' >
          <FieldData id="identityCard" field="Identidade" value={`******${guardian.identityCard.slice(-2)}`} />
        </InputEdit>
        <InputEdit name='issuingAuthority' >
          <FieldData id="issuingAuthority" field="Orgão emissor" value={guardian.issuingAuthority} />
        </InputEdit>
        <InputEdit name='issueDate' >
          <FieldData id="issueDate" field="Data de emissão" value={guardian.issueDate} />
        </InputEdit>
        <InputEdit name='state' >
          <FieldData id="state" field="UF" value={guardian.state} />
        </InputEdit>
        <InputEdit name='email' type="email">
          <FieldData id="email" field="Email" value={guardian.email} />
        </InputEdit>
        <InputEdit name='profession' >
          <FieldData id="profession" field="Profissão" value={guardian.profession} />
        </InputEdit>
        <InputEdit name='workplace' >
          <FieldData id="workplace" field="Empresa que trabalho" value={guardian.workplace} />
        </InputEdit>
        <InputEdit name='workPhone' >
          <FieldData id="workPhone" field="Celular da empresa" value={guardian.workPhone} />
        </InputEdit>
        <InputEdit name='phone' >
          <FieldData id="phone" field="Celular" value={formatPhone(guardian.phone)} />
        </InputEdit>
      </div>
    </details>
  )
}
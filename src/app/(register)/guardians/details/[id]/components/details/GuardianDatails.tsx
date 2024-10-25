import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { gender } from "@/configs/gender"
import { colorOrRace } from "@/configs/colorOrRace"
import { maritalStatus } from "@/configs/maritalStatus"
import { IGuardianInfo } from "../../../../@types/IGuardianInfo"

export const GuardianDetails = ({ guardian }: { guardian: IGuardianInfo }) => {
  return (
    <details open className=" rounded-b-xl bg-gray-50 group">
      <summary className="px-4 grid grid-cols-3  border-t p-4 place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-6">
        <FieldData field="Data de nascimento" value={guardian?.dateOfBirth || '-'} />
        <FieldData field="Estado civil" value={maritalStatus[guardian?.maritalStatus as keyof typeof maritalStatus] || '-'} />
        <FieldData field="Sexo" value={gender[guardian?.gender as keyof typeof gender] || '-'} />
        <FieldData field="Cor/Raça" value={colorOrRace[guardian?.colorOrRace as keyof typeof colorOrRace] || '-'} />
        <FieldData field="CPF" value={guardian?.document || '-'} />
        <FieldData field="Identidade" value={guardian?.identityCard || '-'} />
        <FieldData field="Orgão emissor" value={guardian?.issuingAuthority || '-'} />
        <FieldData field="Data de emissão" value={guardian?.issueDate || '-'} />
        <FieldData field="UF" value={guardian?.state || '-'} />
        <FieldData field="Profissão" value={guardian?.profession || '-'} />
        <FieldData field="Local de trabalho" value={guardian?.workplace || '-'} />
        <FieldData field="Telefone do trabalho" value={guardian.workPhone || '-'} />
      </div>
    </details>
  )
}
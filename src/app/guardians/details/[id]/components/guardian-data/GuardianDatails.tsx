import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "./FieldData"
import { UserEditIcon } from "@/components/icons/UserEditiIcon"

interface IGuardianDetails {
  image: string
  name: string
  address: string
  phone: string
  email: string
  dateOfBirth: string
  maritalStatus: string
  gender: string
  colorOrRace: string
  document: string
  identityCard: string
  issuingAuthority: string
  state: string
  issueDate: string
  workplace: string
  profession: string
  workPhone: string
}
export const GuardianDetails = ({ guardianData }: { guardianData: IGuardianDetails }) => {
  return (
    <details open className=" rounded-b-xl bg-gray-50 group">
      {/* <summary className="flex justify-center  text-gray-500 p-2"><DotsIcon /></summary> */}
      <summary className="px-4 grid grid-cols-3  group-open:rounded-b-none rounded-b-xl bg-[--bg-tertiary] place-items-center text-gray-500 py-2"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-6">
        <FieldData field="Data de nascimento" value={guardianData?.dateOfBirth || '-'} />
        <FieldData field="Estado civil" value={guardianData?.maritalStatus || '-'} />
        <FieldData field="Sexo" value={guardianData?.gender || '-'} />
        <FieldData field="Cor/Raça" value={guardianData?.colorOrRace || '-'} />
        <FieldData field="CPF" value={guardianData?.document || '-'} />
        <FieldData field="Identidade" value={guardianData?.identityCard || '-'} />
        <FieldData field="Orgão emissor" value={guardianData?.issuingAuthority || '-'} />
        <FieldData field="Data de emissão" value={guardianData?.issueDate || '-'} />
        <FieldData field="UF" value={guardianData?.state || '-'} />
        <FieldData field="Profissão" value={guardianData?.profession || '-'} />
        <FieldData field="Local de trabalho" value={guardianData?.workplace || '-'} />
        <FieldData field="Telefone do trabalho" value={guardianData.workPhone || '-'} />
      </div>
    </details>
  )
}
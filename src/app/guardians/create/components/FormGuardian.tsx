'use client'
import { SearchIcon } from "@/components/icons/SearchIcon"
import { ImageUpload } from "@/components/image-uploads/ImageUpload"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { InputText } from "@/components/inputs/InputText"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { CheckboxGender } from "./CheckboxGender"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { LoginIcon } from "@/components/icons/LoginIcon"
import { ToolIcon } from "@/components/icons/ToolIcon"
import { useGuardiansStore } from "../../stores/useGuardianStore"
import { guardianCreate } from "@/services/guardian/guardianCreate"
import { AddressData } from "./form-guardian/AddressData"
import { JobData } from "./form-guardian/JobData"
import { SecurityData } from "./form-guardian/SecurityData"
import { PersonalData } from "./form-guardian/PersonalData"

export const maritalStatusOptions = [
  { label: "Solteiro", value: 'SINGLE' },
  { label: "Casado", value: 'MARRIED' },
  { label: "Divorciado", value: 'DIVORCED' },
  { label: "Viúvo", value: 'WINDOWED' },
]

export const colorOrRaceOptions = [
  { label: "Amamrelo", value: 'YELLOW' },
  { label: "Branco", value: 'WHITE' },
  { label: "Pardo", value: 'BROWN' },
  { label: "Preto", value: 'BLACK' },
  { label: "Índigena", value: 'INDIGENOUS' },
]

export const employeeRoleOptions = [
  { label: "Professor(a)", value: 'TEACHER' },
  { label: "Coordenador(a)", value: 'COORDINATOR' },
  { label: "Secretário(a)", value: 'SECRETARY' },
  { label: "Assistente", value: 'ASSISTANT' },
  { label: "Orientador(a)", value: 'ADVISOR' }
]

export const FormGuardian = () => {
  const { pushGuardian } = useGuardiansStore()
  async function handleFormCation(formData: FormData) {
    const response = await guardianCreate(formData)
    console.log(response.data)
    if (response.status === 201) {
      pushGuardian(response.data)
    }
  }

  return (
    <form action={handleFormCation} className="flex flex-col gap-4">
      <PersonalData />

      <AddressData />

      <JobData />

      <SecurityData />
      <div className="flex items-center gap-4 justify-end">
        <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
        <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
      </div>
    </form>
  )
}


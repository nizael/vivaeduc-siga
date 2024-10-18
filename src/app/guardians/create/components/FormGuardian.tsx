'use client'
import { useGuardiansStore } from "../../stores/useGuardianStore"
import { guardianCreate } from "@/services/guardian/guardianCreate"
import { AddressData } from "./form-guardian/AddressData"
import { JobData } from "./form-guardian/JobData"
import { SecurityData } from "./form-guardian/SecurityData"
import { PersonalData } from "./form-guardian/PersonalData"
import { redirect } from "next/navigation"

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
    const { status, data } = await guardianCreate(formData)
    if (status === 201) {
      pushGuardian(data)
      redirect('/guardians')
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


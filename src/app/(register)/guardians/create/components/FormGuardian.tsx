'use client'
import { guardianCreate } from "@/services/guardian/guardianCreate"
import { JobData } from "./form-guardian/JobData"
import { PersonalData } from "./form-guardian/PersonalData"
import { redirect } from "next/navigation"
import { AddressForm } from "@/components/templates/address/AddressForm"
import { SecurityForm } from "@/components/templates/security/SecurityForm"

export const FormGuardian = () => {
  async function handleFormCation(formData: FormData) {
    const { status, data } = await guardianCreate(formData)
    if (status === 201) {
      redirect('/guardians')
    }
  }

  return (
    <form action={handleFormCation} className="flex flex-col gap-4">
      <PersonalData />
      <AddressForm />
      <JobData />
      <SecurityForm />
      <div className="flex items-center gap-4 justify-end">
        <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
        <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
      </div>
    </form>
  )
}


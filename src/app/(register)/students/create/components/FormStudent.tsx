'use client'
import { ImageUpload } from "@/components/image-uploads/ImageUpload"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { InputText } from "@/components/inputs/InputText"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { CheckboxGender } from "./CheckboxGender"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { useRouter } from "next/navigation"
import { studentCreate } from "@/services/student/studentCreate"
import { colorOrRaceOptions } from "@/configs/colorOrRace"
import { maritalStatusOptions } from "@/configs/maritalStatus"
import { useEffect, useState } from "react"
import { guardianListAll } from "@/services/guardian/guardianListAll"
import { IGuardians } from "../../../guardians/stores/useGuardianStore"
import { kinshipOptions } from "@/configs/kinship"
import { UserHeartIcon } from "@/components/icons/UserHeartIcon"
import { SecurityForm } from "@/components/templates/security/SecurityForm"
import { AddressForm } from "@/components/templates/address/AddressForm"
import { ErrorModal } from "@/components/modals/ErrorModal"


export const FormStudent = () => {
  const [isOpen, onClose] = useState(false)
  const [message, setMessage] = useState('')
  const [guardians, setGuardians] = useState<{ value: string, label: string }[]>([])
  const [username, setUsername] = useState<string>('')
  const router = useRouter()
  async function handleFormCation(formData: FormData) {
    const { status, data } = await studentCreate(formData)
    if (status === 201) {
      router.push(`/students/details/${data.id}`)
    } else {
      setMessage(data.message)
      onClose(true)
    }
  }

  useEffect(() => {
    (async () => {
      const { data, status } = await guardianListAll()
      if (status === 200 && data.length) {
        const guardians = data.map((guardian: IGuardians) => ({ value: guardian.id, label: guardian.name }))
        setGuardians(guardians)
      }
    })()
  }, [])

  return (
    <>
      <ErrorModal isOpen={isOpen} onClose={onClose} message={message} />
      <form action={handleFormCation} className="flex flex-col gap-4">
        <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
          <summary className="px-4 py-2 flex justify-between border-b  text-gray-500">
            <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span>
            <DropdownIcon className="w-5" />
          </summary>
          <div className="flex gap-4 p-4 max-[769px]:flex-col">
            <div className="border rounded-lg border-[#C1BBEB] h-fit flex justify-center">
              <ImageUpload />
            </div>
            <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
              <div className="col-start-1 max-sm:col-end-2  max-md:col-end-3">
                <InputText required label="Nome Completo *" name="name" />
              </div>
              <InputText label="Inep" name="inep" />
              <InputText type="date" required label="Data de nascimento *" name="dateOfBirth" />
              <CustomSelect required name="colorOrRace" label="Cor/Raça *" options={colorOrRaceOptions} className="w-full" onChange={() => ({})} />
              <CustomSelect required name="maritalStatus" label="Estado civil *" options={maritalStatusOptions} className="w-full" onChange={() => ({})} />
              <CheckboxGender />
              <InputText required label="CPF *" name="document" />
              <InputText label="RG" name="identityCard" />
              <InputText label="Orgão emissor" name="issuingAuthority" />
              <InputText type="date" label="Date de emissão" name="issueDate" />
              <InputText label="UF" name="issueState" />
              <InputText required label="Celular *" name="phone" />
              <InputText required label="email *" name="email" />
            </div>
          </div>
        </details>

        <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
          <summary className="px-4 py-2 flex justify-between border-b  text-gray-500">
            <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserHeartIcon />Responsaveis</span>
            <DropdownIcon className="w-5" />
          </summary>
          <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
            <CustomSelect position="top" name="financialResponsible" label="Responsável financeiro *" options={guardians} className="w-full" onChange={() => ({})} />
            <CustomSelect position="top" name="kinship_1" label="Parentesco *" options={kinshipOptions} className="w-full" onChange={() => ({})} />
          </div>
          <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
            <CustomSelect position="top" name="responsible" label="Responsável" options={guardians} className="w-full" onChange={() => ({})} />
            <CustomSelect position="top" name="kinship_2" label="Parentesco" options={kinshipOptions} className="w-full" onChange={() => ({})} />
          </div>
        </details>

        <AddressForm />

        <SecurityForm />

        <div className="flex items-center gap-4 justify-end">
          <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
          <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
        </div>
      </form>
    </>

  )
}


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
import { redirect, useRouter } from "next/navigation"
import { studentCreate } from "@/services/student/studentCreate"
import { ToolIcon } from "@/components/icons/ToolIcon"
import { colorOrRaceOptions } from "@/configs/colorOrRace"
import { maritalStatusOptions } from "@/configs/maritalStatus"
import { useEffect, useState } from "react"
import { guardianListAll } from "@/services/guardian/guardianListAll"
import { IGuardians } from "../../../guardians/stores/useGuardianStore"
import { kinshipOptions } from "@/configs/kinship"


export const FormStudent = () => {

  const [guardians, setGuardians] = useState<{ value: string, label: string }[]>([])
  const [username, setUsername] = useState<string>('')
  const router = useRouter()
  async function handleFormCation(formData: FormData) {
    const { status, data } = await studentCreate(formData)
    if (status === 201) {
      router.push(`/students/details/${data.id}`)
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
    <form action={handleFormCation} className="flex flex-col gap-4">
      <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
        <div className="flex gap-4 p-4 ">
          <div className="border rounded-lg border-[#C1BBEB] h-fit">
            <ImageUpload />
          </div>
          <div className="grid grid-cols-4 gap-4 p-4 w-full">
            <div className="col-start-1 col-end-3">
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
        <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><ToolIcon />Responsaveis</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
        <div className="grid grid-cols-4 gap-4 p-4">
          <CustomSelect position="top" name="financialResponsible" label="Responsável financeiro *" options={guardians} className="w-full" onChange={() => ({})} />
          <CustomSelect position="top" name="degreeOfKinship_1" label="Parentesco *" options={kinshipOptions} className="w-full" onChange={() => ({})} />
        </div>
        <div className="grid grid-cols-4 gap-4 p-4">
          <CustomSelect position="top" name="responsible" label="Responsável" options={guardians} className="w-full" onChange={() => ({})} />
          <CustomSelect position="top" name="degreeOfKinship_2" label="Parentesco" options={kinshipOptions} className="w-full" onChange={() => ({})} />
        </div>
      </details>

      <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
        <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="flex items-end gap-1 justify-between">
            <InputText required label="CEP *" name="postalCode" />
            <button className="w-[40px] h-[40px] grid place-content-center text-gray-50 rounded-lg bg-[--bg-primary]"><SearchIcon /></button>
          </div>
          <InputText required label="Número *" name="number" />
          <div className="col-start-3 col-end-5">
            <InputText required label="Logradouro *" name="street" />
          </div>
          <InputText required label="Bairro *" name="neighborhood" />
          <InputText required label="Cidade *" name="city" />
          <InputText required label="UF *" name="state" />
          <InputText label="Complemento" name="complement" />
        </div>
      </details>


      <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LoginIcon />Dados e login</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
        <div className="grid grid-cols-4 gap-4 p-4">
          <InputText label="Usuário" name="username" onChange={evt => setUsername(evt.currentTarget.value)} />
          <InputText required={!!username} type="password" label="Senha *" name="password" />
        </div>
      </details>
      <div className="flex items-center gap-4 justify-end">
        <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
        <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
      </div>
    </form>
  )
}


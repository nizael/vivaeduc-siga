'use client'
import { SearchIcon } from "@/components/icons/SearchIcon"
import { ImageUpload } from "@/components/image-uploads/ImageUpload"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { InputText } from "@/components/inputs/InputText"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { CheckboxGender } from "./CheckboxGender"
import { employeeCreate } from "../../../../services/employee/employeeCreate"
import { useEmployeesStore } from "../../stores/useEmployeesStore"

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




export const FormEmployee = () => {
  const { pushEmployee } = useEmployeesStore()
  async function handleFormCation(formData: FormData) {
    const response = await employeeCreate(formData)
    if (response.status === 201) {
      pushEmployee(response.data)
    }
  }

  return (
    <form action={handleFormCation} className="flex flex-col gap-4">
      <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary>
          <div className="rounded-t-lg bg-[--bg-primary] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Dados do pessoais</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="flex gap-4 p-4 ">
          <div className="border rounded-lg border-[#C1BBEB] h-fit">
            <ImageUpload />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 w-full">
            <InputText required label="Nome Completo *" name="name" />
            <div className="flex items-center gap-4 justify-between">
              <InputText required label="Data de nascimento *" name="dateOfBirth" />
              <CustomSelect required name="colorOrRace" label="Cor/Raça *" options={colorOrRaceOptions} className="w-full" onChange={() => ({})} />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <CustomSelect required name="maritalStatus" label="Estado civil *" options={maritalStatusOptions} className="w-full" onChange={() => ({})} />
              <CheckboxGender />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <InputText required label="CPF *" name="document" />
              <InputText label="RG" name="identityCard" />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <InputText label="Orgão emissor" name="issuingAuthority" />
              <InputText label="Date de emissão" name="issueDate" />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <InputText label="UF" name="issueState" />
              <InputText required label="Celular *" name="phone" />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <InputText required label="email *" name="email" />
              <InputText label="Apelido" name="nickname" />
            </div>
          </div>
        </div>
      </details>

      <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
        <summary>
          <div className="rounded-t-lg bg-[--bg-primary] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Endereço</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex items-end gap-1 justify-between">
            <InputText required label="CEP *" name="postalCode" />
            <button className="w-[40px] h-[40px] grid place-content-center text-gray-50 rounded-lg bg-[--bg-primary]"><SearchIcon /></button>
          </div>
          <InputText required label="Logradouro *" name="street" />
          <div className="flex items-center gap-4 justify-between">
            <InputText required label="Bairro *" name="neighborhood" />
            <InputText required label="Número *" name="number" />
          </div>
          <div className="flex items-center gap-4 justify-between">
            <InputText required label="Cidade *" name="city" />
            <InputText required label="UF *" name="state" />
          </div>
          <InputText label="Complemento" name="complement" />
        </div>
      </details>

      <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary>
          <div className="rounded-t-lg bg-[--bg-primary] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Dados do trabalho</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="grid grid-cols-2 gap-4 p-4">
          <CustomSelect position="top" required name="role" label="Cargo *" options={employeeRoleOptions} className="w-full" onChange={() => ({})} />
        </div>
      </details>
      <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary>
          <div className="rounded-t-lg bg-[--bg-primary] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Dados e login</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="grid grid-cols-2 gap-4 p-4">
          <InputText required label="Usuário *" name="username" />
          <InputText required type="password" label="Senha *" name="password" />
        </div>
      </details>
      <div className="flex items-center gap-4 justify-end">
        <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
        <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
      </div>
    </form>
  )
}


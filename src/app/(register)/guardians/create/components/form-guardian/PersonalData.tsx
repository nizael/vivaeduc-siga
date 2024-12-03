import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { ImageUpload } from "@/components/image-uploads/ImageUpload"
import { InputText } from "@/components/inputs/InputText"
import { CheckboxGender } from "../CheckboxGender"
import { colorOrRaceOptions } from "@/configs/colorOrRace"
import { maritalStatusOptions } from "@/configs/maritalStatus"
import { env } from "@/configs/env"

export const PersonalData = () => {
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
      <summary className="px-4 py-2 flex justify-between border-b  text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><UserEditIcon /> Dados pessoais</span>
        <DropdownIcon className="w-5" />
      </summary>
      <div className="flex gap-4 p-4 max-[769px]:flex-col">
        {env.NODE_ENV !== 'production' && <div className="border rounded-lg border-[#C1BBEB] h-fit flex justify-center">
          <ImageUpload />
        </div>}
        <div className="grid max-[641px]:grid-cols-1 max-[769px]:grid-cols-2  max-[1025px]:grid-cols-3 grid-cols-4  gap-4 p-4 w-full">
          <div className="col-start-1 max-sm:col-end-2  max-md:col-end-3">
            <InputText required label="Nome Completo *" name="name" />
          </div>
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
  )
}
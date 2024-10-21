import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { UserEditIcon } from "@/components/icons/UserEditIcon"
import { ImageUpload } from "@/components/image-uploads/ImageUpload"
import { InputText } from "@/components/inputs/InputText"
import { CheckboxGender } from "../CheckboxGender"
import { colorOrRaceOptions } from "@/configs/colorOrRace"
import { maritalStatusOptions } from "@/configs/maritalStatus"

export const PersonalData = ()=>{
  return(
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
        <InputText required label="Data de nascimento *" name="dateOfBirth" />
        <CustomSelect required name="colorOrRace" label="Cor/Raça *" options={colorOrRaceOptions} className="w-full" onChange={() => ({})} />
        <CustomSelect required name="maritalStatus" label="Estado civil *" options={maritalStatusOptions} className="w-full" onChange={() => ({})} />
        <CheckboxGender />
        <InputText required label="CPF *" name="document" />
        <InputText label="RG" name="identityCard" />
        <InputText label="Orgão emissor" name="issuingAuthority" />
        <InputText label="Date de emissão" name="issueDate" />
        <InputText label="UF" name="issueState" />
        <InputText required label="Celular *" name="phone" />
        <InputText required label="email *" name="email" />
      </div>
    </div>
  </details>
  )
}
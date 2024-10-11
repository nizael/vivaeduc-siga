import { SearchIcon } from "@/components/icons/SearchIcon"
import { ImageUpload } from "@/components/ImageUpload" 
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { InputText } from "@/components/inputs/InputText"

export const FormEmployee = () => {
  return (
    <form action="" className="flex flex-col gap-8">
      <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary>
          <div className="rounded-t-lg bg-[#4D44B5] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Dados do pessoais</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="flex gap-4 p-4 ">
          <div className="border rounded-lg border-[#C1BBEB]">
            <ImageUpload />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 w-full">
            <InputText label="Nome Completo *" />
            <div className="flex items-center gap-4 justify-between">
              <InputText label="Etado Civil *" />
              <InputText label="Cor ou Raça *" />
            </div>
            <CheckboxGender />
            <div className="flex items-center gap-4 justify-between">
              <InputText label="CPF *" />
              <InputText label="RG" />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <InputText label="Orgão emissor" />
              <InputText label="Date de emissão" />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <InputText label="UF" />
              <InputText label="Telefone *" />
            </div>
            <div className="flex items-center gap-4 justify-between">
              <InputText label="email" />
            </div>
          </div>
        </div>
      </details>

      <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
        <summary>
          <div className="rounded-t-lg bg-[#4D44B5] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Endereço</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex items-end gap-1 justify-between">
            <InputText label="CEP *" />
            <button className="w-[40px] h-[40px] grid place-content-center text-gray-50 rounded-lg bg-[#4D44B5]"><SearchIcon /></button>
          </div>
          <InputText label="Logradouro *" />
          <div className="flex items-center gap-4 justify-between">
            <InputText label="Bairro *" />
            <InputText label="Número *" />
          </div>
          <div className="flex items-center gap-4 justify-between">
            <InputText label="Cidade" />
            <InputText label="UF" />
          </div>
        </div>
      </details>

      <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary>
          <div className="rounded-t-lg bg-[#4D44B5] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Dados do trabalho</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="grid grid-cols-2 gap-4 p-4">
          <InputText label="Cargo *" />
        </div>
      </details>
      <div className="flex items-center gap-4 justify-end">
        <button type="button" className="flex items-center px-4 h-[40px] text-[#4D44B5] border border-[#4D44B5] rounded-full">Cancelar</button>
        <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[#4D44B5] rounded-full">Salvar</button>
      </div>
    </form>
  )
}

const CheckboxGender = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className=" text-[#303972] font-semibold ">Sexo</span>
      <div className="flex gap-2 border border-[#C1BBEB] rounded-lg p-2 text-base text-[#303972] font-medium outline-[#4D44B5]  bg-white">
        <label className="flex items-center gap-2" htmlFor="male"><input type="radio" id="male" name="gender" /> Masculino</label>
        <label className="flex items-center gap-2" htmlFor="female"><input type="radio" id="female" name="gender" /> feminino</label>
      </div>
    </div>
  )
}
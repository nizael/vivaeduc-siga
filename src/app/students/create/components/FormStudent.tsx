import { SearchIcon } from "@/components/icons/SearchIcon"
import { ImageUpload } from "@/components/image-uploads/ImageUpload"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { InputText } from "@/components/inputs/InputText"

export const FormStudent = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm">
        <summary>
          <div className="rounded-t-lg bg-[--bg-primary] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Dados do aluno</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="flex gap-4 p-4 ">
          <div className="border rounded-lg border-[#C1BBEB] h-fit">
            <ImageUpload />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 w-full">
            <InputText label="Nome Completo *" />
            <div className="flex items-center gap-4 justify-between">
              <InputText label="Matrícula" />
              <InputText label="INEP" />
            </div>
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
            <InputText label="UF" />
            <div className="flex items-center gap-4 justify-between">
              <InputText label="email" />
              <InputText label="Telefone" />
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
            <InputText label="CEP *" />
            <button className="w-[40px] h-[40px] grid place-content-center text-gray-50 rounded-lg bg-[--bg-primary]"><SearchIcon /></button>
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
          <div className="rounded-t-lg bg-[--bg-primary] px-4 py-2 text-gray-50 flex items-center justify-between">
            <p>Responsáveis</p>
            <DropdownIcon />
          </div>
        </summary>
        <div className="grid grid-cols-2 gap-4 p-4">
          <InputText label="Responsável 1 *" />
          <div className="flex items-end gap-4 justify-between">
            <InputText label="Parentesco *" />
            <label className="flex items-center flex-none gap-2 py-2 font-semibold text-[--text-primary]" htmlFor="guardian_1"><input type="radio" id="guardian_1" name="guardian" />Responsável financeiro</label>
          </div>
          <InputText label="Responsável 2" />
          <div className="flex items-end gap-4 justify-between">
            <InputText label="Parentesco" />
            <label className="flex items-center flex-none gap-2 py-2 font-semibold text-[--text-primary] " htmlFor="guardian_2"><input type="radio" id="guardian_2" name="guardian" />Responsável financeiro</label>
          </div>
        </div>
      </details>
      <div className="flex items-center gap-4 justify-end">
        <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
        <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
      </div>
    </form>
  )
}

const CheckboxGender = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className=" text-[--text-primary] font-semibold ">Sexo</span>
      <div className="flex gap-2 border border-[#C1BBEB] rounded-lg p-2 text-base text-[--text-primary] font-medium outline-[--bg-primary]  bg-white">
        <label className="flex items-center gap-2" htmlFor="male"><input type="radio" id="male" name="gender" /> Masculino</label>
        <label className="flex items-center gap-2" htmlFor="female"><input type="radio" id="female" name="gender" /> feminino</label>
      </div>
    </div>
  )
}
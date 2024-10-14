import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "./FieldData"

export const UserDetails = () => {
  return (
    <details className=" rounded-b-xl bg-gray-50 ">
      <summary className="flex justify-center  text-gray-500 p-2"><DotsIcon /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-6">
        <FieldData field="Data de nascimento" value="21/08/1985" />
        <FieldData field="Estado civil" value="Casado" />
        <FieldData field="Sexo" value="Masculino" />
        <FieldData field="Cor/Raça" value="Branco" />
        <FieldData field="CPF" value="****.****.****-25" />
        <FieldData field="Identidade" value="*****83" />
        <FieldData field="Orgão emissor" value="SSP" />
        <FieldData field="Data de emissão" value="16/02/2022" />
        <FieldData field="UF" value="PA" />
        <FieldData field="Profissão" value="Médico" />
        <FieldData field="Local de trabalho" value="Akademic" />
        <FieldData field="Telefone de trabalho" value="(91) 9 8173-0582" />
      </div>
    </details>
  )
}
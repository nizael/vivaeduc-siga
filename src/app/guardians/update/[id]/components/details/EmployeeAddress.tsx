import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { formatCEP } from "@/utils/formatCEP"
import { InputEdit } from "../InputEdit"
import { IAddress } from "@/types/address/IAddress"

export const EmployeeAddress = ({ address }: { address: IAddress }) => {
  return (
    <details className=" rounded-b-xl bg-gray-50 overflow-hidden">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="postalCode" >
          <FieldData field="CEP" value={formatCEP(address.postalCode)} />
        </InputEdit>
        <InputEdit name='street' >
          <FieldData field="Logradouro" value={address.street} />
        </InputEdit>
        <InputEdit name='number' >
          <FieldData field="Número" value={address.number} />
        </InputEdit>
        <InputEdit name='complement' >
          <FieldData field="Complemento" value={address.complement || '-'} />
        </InputEdit>
        <InputEdit name='city' >
          <FieldData field="Cidade" value={address.city} />
        </InputEdit>
        <InputEdit name='neighborhood' >
          <FieldData field="Bairro" value={address.neighborhood} />
        </InputEdit>
        <InputEdit name='state' >
          <FieldData field="UF" value={address.state} />
        </InputEdit>

      </div>
    </details>
  )
}
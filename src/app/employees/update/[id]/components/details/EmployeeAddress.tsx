import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { formatCEP } from "@/utils/formatCEP"
import { InputEdit } from "../EmputEdit"

export interface IAddress {
  number: string
  id: string
  street: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  postalCode: string
  country: string
}
export const EmployeeAddress = ({ employeeAddress }: { employeeAddress: IAddress }) => {
  return (
    <details className=" rounded-b-xl bg-gray-50 overflow-hidden">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="postalCode" >
          <FieldData field="CEP" value={formatCEP(employeeAddress.postalCode)} />
        </InputEdit>
        <InputEdit name='street' >
          <FieldData field="Logradouro" value={employeeAddress.street} />
        </InputEdit>
        <InputEdit name='number' >
          <FieldData field="Número" value={employeeAddress.number} />
        </InputEdit>
        <InputEdit name='complement' >
          <FieldData field="Complemento" value={employeeAddress.complement || '-'} />
        </InputEdit>
        <InputEdit name='city' >
          <FieldData field="Cidade" value={employeeAddress.city} />
        </InputEdit>
        <InputEdit name='neighborhood' >
          <FieldData field="Bairro" value={employeeAddress.neighborhood} />
        </InputEdit>
        <InputEdit name='state' >
          <FieldData field="UF" value={employeeAddress.state} />
        </InputEdit>

      </div>
    </details>
  )
}
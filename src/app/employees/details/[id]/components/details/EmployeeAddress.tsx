import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { formatCEP } from "@/utils/formatCEP"

export interface IAddress  {
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
    <details className=" rounded-b-xl bg-gray-50  group">
      <summary className="p-4 grid grid-cols-3 border-t place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço completo</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <FieldData field="CEP" value={ formatCEP(employeeAddress.postalCode)} />
        <FieldData field="Logradouro" value={employeeAddress.street} />
        <FieldData field="Número" value={employeeAddress.number} />
        <FieldData field="Complemento" value={employeeAddress.complement||'-'} />
        <FieldData field="Cidade" value={employeeAddress.city} />
        <FieldData field="Bairro" value={employeeAddress.neighborhood} />
        <FieldData field="UF" value={employeeAddress.state} />
      </div>
    </details>
  )
}
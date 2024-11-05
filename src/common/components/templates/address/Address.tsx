import { DotsIcon } from "@/components/icons/DotsIcon"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { IAddress } from "@/types/address/IAddress"
import { formatCEP } from "@/utils/formatCEP"
import { FieldData } from "../../../../app/(register)/school/components/principal-data/FieldData"

export const Address = ({ address }: { address: IAddress }) => {
  return (
    <details className=" rounded-b-xl bg-gray-50  group">
      <summary className="px-4 py-2 grid grid-cols-3 border-t place-items-center bg-primary  text-gray-50"><span className="font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço completo</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <FieldData field="CEP" value={formatCEP(address.postalCode)} />
        <FieldData field="Logradouro" value={address.street} />
        <FieldData field="Número" value={address.number} />
        <FieldData field="Complemento" value={address.complement || '-'} />
        <FieldData field="Cidade" value={address.city} />
        <FieldData field="Bairro" value={address.neighborhood} />
        <FieldData field="UF" value={address.state} />
      </div>
    </details>
  )
}
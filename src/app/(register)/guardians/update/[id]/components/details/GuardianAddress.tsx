'use client'
import { DotsIcon } from "@/components/icons/DotsIcon"
import { FieldData } from "../field-data/FieldData"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { formatCEP } from "@/utils/formatCEP"
import { useUpdateGuardianStore } from "../../../../stores/useUpdateGuardianStore"
import { guardianUpdate } from "@/services/guardian/guardianUpdate"
import { InputEdit } from "@/components/inputs/InputEdit"

export const GuardianAddress = () => {
  const { guardian, updateAttributeAddress, address } = useUpdateGuardianStore()

  async function updateAddressSelectEdit(evt: React.FormEvent<HTMLFormElement>, field: string) {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const value = formData.get(field)?.toString()
    if (value && guardian) {
      const data = { address: { [`${field}`]: value } }
      const result = await guardianUpdate(data, guardian?.id)
      if (result.status === 200) updateAttributeAddress({ [`${field}`]: value })// address[field as keyof typeof address] = value
    }
  }
  if (!address) return null
  return (
    <details className=" rounded-b-xl bg-gray-50 overflow-hidden">
      <summary className="px-4 py-2 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><LocationIcon /> Endereço</span> <DotsIcon /> <span /></summary>
      <div className="relative grid grid-cols-4 gap-4  p-4">
        <InputEdit name="postalCode" onSubmit={evt => updateAddressSelectEdit(evt, 'postalCode')} defaultValue={address.postalCode}>
          <FieldData field="CEP" value={formatCEP(address.postalCode)} />
        </InputEdit>
        <InputEdit name='street' onSubmit={evt => updateAddressSelectEdit(evt, 'street')} defaultValue={address.street}>
          <FieldData field="Logradouro" value={address.street} />
        </InputEdit>
        <InputEdit name='number' onSubmit={evt => updateAddressSelectEdit(evt, 'number')} defaultValue={address.number}>
          <FieldData field="Número" value={address.number} />
        </InputEdit>
        <InputEdit name='complement' onSubmit={evt => updateAddressSelectEdit(evt, 'complement')} defaultValue={address.complement}>
          <FieldData field="Complemento" value={address.complement || '-'} />
        </InputEdit>
        <InputEdit name='city' onSubmit={evt => updateAddressSelectEdit(evt, 'city')} defaultValue={address.city}>
          <FieldData field="Cidade" value={address.city} />
        </InputEdit>
        <InputEdit name='neighborhood' onSubmit={evt => updateAddressSelectEdit(evt, 'neighborhood')} defaultValue={address.neighborhood}>
          <FieldData field="Bairro" value={address.neighborhood} />
        </InputEdit>
        <InputEdit name='state' onSubmit={evt => updateAddressSelectEdit(evt, 'state')} defaultValue={address.state}>
          <FieldData field="UF" value={address.state} />
        </InputEdit>
      </div>
    </details>
  )
}
'use client'
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { FieldData } from "../field-data/FieldData"
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"
import { useEffect, useState } from "react"

export const DetailsBilling = () => {
  const { paymentPlan, discountType, discountValue } = useEnrollmentStore()
  const [discount, setDiscount] = useState(0)
  const [installmentDiscount, setInstallmentDiscount] = useState(0)
  const [installmentValue, setInstallmentValue] = useState(0)

  useEffect(() => {
    if (paymentPlan) {
      setInstallmentValue(paymentPlan.value / paymentPlan.installmentAmount)
    }
  }, [paymentPlan])

  useEffect(() => {
    if (paymentPlan && discount) {
      setInstallmentDiscount(discount/ paymentPlan.installmentAmount)
    }
  }, [discount])

  useEffect(() => {
    if (discountType && discountValue && paymentPlan) {
      const discountTotal = discountType === 'VALUE' ? discountValue : (paymentPlan.value / 100) * discountValue
      setDiscount(discountTotal)
    } else {
      setDiscount(0)
    }
  }, [discountType, discountValue])
  return (
    <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><ClassroomIcon /> Detalhes da cobrança</span>
        <DotsIcon />
        <span className="grid w-full place-content-end"><DropdownIcon /></span>
      </summary>
      <div className="grid grid-cols-4 gap-4 p-4 w-full">
        <FieldData field="Títulos" value={paymentPlan?.installmentAmount.toString() || '-'} />
        <FieldData field="Valor Total" value={paymentPlan?.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '- '} />
        <FieldData field="Desconto" value={`${discountType === 'PERCENTAGE' ? discount + ' %' : discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`} />
        <FieldData field="Valor a receber" value={(paymentPlan) ? (paymentPlan.value - discount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-'} />
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 bg-[--bg-tertiary]">
            <td className="px-4 py-2">Vencimento</td>
            <td className="px-4 py-2">Parcela</td>
            <td className="px-4 py-2">Valor</td>
            <td className="px-4 py-2">Desconto</td>
            <td className="px-4 py-2">A receber</td>
          </tr>
        </thead>
        <tbody className="font-medium text-sm text-[--text-primary]">
          {
            Array.from({ length: paymentPlan?.installmentAmount || 0 }, (_, index) => {
              return (
                <tr className="border-b" key={`tr_${index}`}>
                  <td className="p-4">05/10/2025</td>
                  <td className="p-4">{`${(index + 1).toString().padStart(2, '0')}/12`}</td>
                  <td className="p-4">{installmentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="p-4">{installmentDiscount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="p-4">{(installmentValue - installmentDiscount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </details>
  )
}
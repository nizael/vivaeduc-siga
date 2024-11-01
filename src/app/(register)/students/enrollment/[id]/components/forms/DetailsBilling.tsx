'use client'
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { FieldData } from "../field-data/FieldData"
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"
import { useEffect, useState } from "react"
import { generateInstallmentDates } from "@/utils/generateInstallmentDates"

export const DetailsBilling = () => {
  const { paymentPlan, discountType, discountValue, discountStartDate, discountEndDate } = useEnrollmentStore()
  const [discount, setDiscount] = useState(0)
  const [installmentDiscount, setInstallmentDiscount] = useState(0)
  const [installmentValue, setInstallmentValue] = useState(0)
  const [startDate, setStartDate] = useState()

  useEffect(() => {
    if (paymentPlan) {
      setInstallmentValue(paymentPlan.amount / paymentPlan.installmentAmount)
    }
  }, [paymentPlan])

  useEffect(() => {

    const isDiscount = (discount || typeof discount === 'number')
    if (paymentPlan && isDiscount) {
      setInstallmentDiscount(discount / paymentPlan.installmentAmount)
    }
  }, [discount])

  useEffect(() => {
    if (discountType && discountValue && paymentPlan) {
      const discountTotal = discountType === 'VALUE' ? discountValue : (paymentPlan.amount / 100) * discountValue
      setDiscount(discountTotal)
    } else {
      setDiscount(0)
    }
  }, [discountType, discountValue])
  return (
    <details className="bg-gray-50 flex flex-col gap-4 shadow-sm ">
      <summary className="px-4 py-2 bg-primary grid grid-cols-3 border-b place-items-center text-gray-50">
        <span className="font-semibold text-start w-full flex items-center gap-2"><ClassroomIcon /> Detalhes da cobrança</span>
        <DotsIcon />
        <span className="grid w-full place-content-end"><DropdownIcon /></span>
      </summary>
      <div className="grid grid-cols-4 gap-4 p-4 w-full">
        <FieldData field="Títulos" value={paymentPlan?.installmentAmount.toString() || '-'} />
        <FieldData field="Valor Total" value={paymentPlan?.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '- '} />
        <FieldData field="Desconto" value={`${discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`} />
        <FieldData field="Valor a receber" value={(paymentPlan) ? (paymentPlan.amount - discount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-'} />
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
            paymentPlan && generateInstallmentDates(paymentPlan.amount, paymentPlan.installmentAmount, paymentPlan.dueDay || 0).map((installment, index) => {
              const isDiscountPeriod = installmentDiscount
                && (!discountStartDate || (discountStartDate && new Date(discountStartDate) < installment.dueDate))
                && (!discountEndDate || (discountEndDate && new Date(discountEndDate) > installment.dueDate))

              const discount = isDiscountPeriod ? installmentDiscount : 0
              const total = isDiscountPeriod ? (installmentValue - installmentDiscount) : installmentValue
              return (
                <tr className="border-b" key={`tr_${index}`}>
                  <td className="p-4">{installment.dueDate.toLocaleDateString()}</td>
                  <td className="p-4">{`${(index + 1).toString().padStart(2, '0')}/12`}</td>
                  <td className="p-4">{installmentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="p-4">{discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="p-4">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </details>
  )
}
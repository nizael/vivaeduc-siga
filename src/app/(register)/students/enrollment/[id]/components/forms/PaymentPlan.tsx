'use client'
import { CreditCardIcon } from "@/components/icons/CreditCardIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { paymentPlanListByCourseIdSchoolYearId } from "@/services/paymentPlan/paymentPlaGet"
import { useEffect, useState } from "react"
import { useEnrollmentStore } from "../../../../stores/useEnrollmentStore"
import { IPaymentPlan } from "@/services/paymentPlan/IPaymentPlan"
import { methodReceipt } from "@/configs/methodReceipt"


export const PaymentPlan = () => {
  const { schoolYearId, courseId, setPaymentPlan } = useEnrollmentStore()
  const [paymentPlans, setPaymentPlans] = useState<IPaymentPlan[]>([])
  useEffect(() => {
    (async () => {
      if (schoolYearId && courseId) {
        const { data, status } = await paymentPlanListByCourseIdSchoolYearId(schoolYearId, courseId)
        if (status === 200 && data) setPaymentPlans(data)
      }
    })()
  }, [schoolYearId, courseId]
  )

  function handleOnChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const currentPaymentPlan = paymentPlans?.find(paymentPlan => paymentPlan.id === evt.currentTarget.value)
    if (currentPaymentPlan) setPaymentPlan(currentPaymentPlan)
  }

  if (!paymentPlans.length) return null

  return (
    <details className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500">
        <span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><CreditCardIcon /> Plano de pagamento</span>
        <DotsIcon />
        <span className="grid w-full place-content-end"><DropdownIcon /></span>
      </summary>
      {/* <div className="p-4 flex flex-col gap-4"> */}
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold text-gray-500 bg-[--bg-tertiary]">
            <td className="px-4 py-2">Plano</td>
            <td className="px-4 py-2">Parcelas</td>
            <td className="px-4 py-2">Valor</td>
            <td className="px-4 py-2">Método de pagamento</td>
          </tr>
        </thead>

        <tbody className="font-medium text-sm text-[--text-primary]">
          {paymentPlans.map(paymentPlan => {
            return (
              <tr key={paymentPlan.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary]">
                <td className="p-4">
                  <label htmlFor={paymentPlan.id} className="flex gap-2 text-sm font-semibold"  >
                    <input required className="w-4 h-4" type="radio" value={paymentPlan.id} name="paymentPlanId" id={paymentPlan.id} onChange={handleOnChange} />
                    {paymentPlan.name}
                  </label>
                </td>
                <td className="p-4">{paymentPlan.installmentAmount}</td>
                <td className="p-4">{paymentPlan.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td className="p-4">{methodReceipt[paymentPlan.methodReceipt]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </details>
  )
}
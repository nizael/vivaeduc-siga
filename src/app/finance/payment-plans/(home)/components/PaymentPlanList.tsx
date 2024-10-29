'use client'
import { useEffect } from "react"
import { IPaymentPlan } from "@/services/paymentPlan/IPaymentPlan"
import { methodReceipt } from "@/configs/methodReceipt"
import { usePaymentPlanStore } from "../../../stores/usePaymentPlanStore"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import { Pagination } from "./Pagination"


export const PaymentPlanList = ({ paymentPlans }: { paymentPlans: IPaymentPlan[] }) => {
  const { setPaymentPlans, paymentPlanViews } = usePaymentPlanStore()
  useEffect(() => {
    if (paymentPlans) setPaymentPlans(paymentPlans)
  }, [paymentPlans])

  return (
    <section className="bg-gray-50 p-4 shadow-sm rounded-xl w-full flex flex-col gap-4  h-full">
      <div className="grow">
        <table className="w-full">
          <thead>
            <tr className="text-sm font-semibold text-gray-500 border-b">
              <td className="p-4">Plano</td>
              <td className="p-4">Curso</td>
              <td className="p-4 text-center">Parcelas</td>
              <td className="p-4 text-center">Valor</td>
              <td className="p-4 text-center">Método de pagamento</td>
              <td className="p-4  w-16">Ação</td>
            </tr>
          </thead>

          <tbody className="font-medium text-sm text-[--text-primary]">
            {paymentPlanViews?.map(paymentPlan => {
              return (
                <tr key={paymentPlan.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary]">
                  <td className="p-4">{paymentPlan.name}</td>
                  <td className="p-4">{paymentPlan.courseName}</td>
                  <td className="p-4 text-center">{paymentPlan.installmentAmount}</td>
                  <td className="p-4 text-center">{paymentPlan.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="p-4 text-center">{methodReceipt[paymentPlan.methodReceipt]}</td>
                  <td className="p-4 text-center">
                    <NavMenu items={[
                      { href: `#`, label: 'Editar' },
                      { href: `#`, label: 'Detalhes' },
                    ]} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
  )
}
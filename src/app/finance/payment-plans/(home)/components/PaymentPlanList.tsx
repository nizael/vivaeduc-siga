'use client'
import { useEffect } from "react"
import { IPaymentPlan } from "@/services/paymentPlan/IPaymentPlan"
import { methodReceipt } from "@/configs/methodReceipt"
import { usePaymentPlanStore } from "../../../stores/usePaymentPlanStore"
import { NavMenu } from "@/components/nav-menu/NavMenu"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { Pagination } from "@/components/pagination/Pagination"


export const PaymentPlanList = ({ ListPaymentPlans }: { ListPaymentPlans: IPaymentPlan[] }) => {
  const { setPaymentPlans, paymentPlanViews, paymentPlans, setCurrentPage, currentPage, } = usePaymentPlanStore()
  useEffect(() => {
    if (ListPaymentPlans) setPaymentPlans(ListPaymentPlans)
  }, [ListPaymentPlans])

  if (!paymentPlanViews?.length) return <EmptyPage label="Não existem planos de pagamento cadastrados" />
  return (
    <section className="bg-gray-50 shadow-sm  w-full flex flex-col gap-4  grow">
      <div className="grow">
        <table className="w-full">
          <thead className="bg-primary text-gray-50">
            <tr className="text-sm font-semibold border-b">
              <td className="px-4 py-2">Plano</td>
              <td className="px-4 py-2">Curso</td>
              <td className="px-4 py-2 text-center">Parcelas</td>
              <td className="px-4 py-2 text-center">Valor</td>
              <td className="px-4 py-2 text-center">Método de pagamento</td>
              <td className="px-4 py-2  w-16">Ação</td>
            </tr>
          </thead>

          <tbody className="font-medium text-sm text-[--text-primary]">
            {paymentPlanViews?.map(paymentPlan => {
              return (
                <tr key={paymentPlan.id} className="text-[--text-primary] font-semibold text-sm hover:bg-[--hover-secondary]">
                  <td className="px-4 py-2">{paymentPlan.name}</td>
                  <td className="px-4 py-2">{paymentPlan.courseName}</td>
                  <td className="px-4 py-2 text-center">{paymentPlan.installmentAmount}</td>
                  <td className="px-4 py-2 text-center">{paymentPlan.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="px-4 py-2 text-center">{methodReceipt[paymentPlan.methodReceipt]}</td>
                  <td className="px-4 py-2 text-center">
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
      {paymentPlans && <Pagination items={paymentPlans} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </section>
  )
}
'use client'
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { IEnrollment } from "@/services/enrollment/IEnrollment"
import { IMonthlyFees } from "@/services/monthly-fees/IMonthlyFees"
import { useMonthlyFeesStore } from "../../../../stores/useMonthlyFeesStore"
import { useEffect, useState } from "react"
import { Pagination } from "./Pagination"


export const ListMonthlyFees = ({ enrollments }: { enrollments: IEnrollment[] }) => {
  const { setMonthlyFees, monthlyFeesView } = useMonthlyFeesStore()

  const [installmentAmount, setInstallmentAmount] = useState(0)
  const [debit, SetDebit] = useState(0)

  useEffect(() => {
    if (!enrollments) return

    const calculateDiscount = (monthlyFee: IMonthlyFees, enrollment: IEnrollment) => {
      const { type, amount = 0, startDate, endDate } = enrollment?.discount || {}
      const isDiscountPeriod = amount &&
        (!startDate || new Date(startDate) <= monthlyFee.dueDate) &&
        (!endDate || new Date(endDate) >= monthlyFee.dueDate)

      const installmentAmount = enrollment.monthlyFees.length

      const discountByInstallment = type === 'VALUE'
        ? amount / installmentAmount
        : (monthlyFee.amount * amount) / 100

      return isDiscountPeriod ? discountByInstallment : 0
    }

    const formattedMonthlyFees = enrollments.flatMap(enrollment =>
      enrollment.monthlyFees.map((monthlyFee, index) => {
        const discount = calculateDiscount(monthlyFee, enrollment)
        const total = monthlyFee.amount - discount
        return {
          id: monthlyFee.id,
          classroomName: enrollment.classroom.name,
          dueDate: new Date(monthlyFee.dueDate).toLocaleDateString('pt-BR'),
          installment: `${monthlyFee.number}/${index + 1}`,
          discountAmount: discount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          schoolYearName: enrollment.schoolYear.name,
          status: monthlyFee.status === 'PAID' ? 'Pago' : 'Pendente',
          totalAmount: total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          delay: new Date(monthlyFee.dueDate) < new Date()
        }
      })
    )
    setInstallmentAmount(formattedMonthlyFees.length)
    setMonthlyFees(formattedMonthlyFees)
  }, [enrollments])

  if (!enrollments.length) return null

  return (
    <section className="bg-gray-50 p-4 shadow-sm rounded-xl w-full flex flex-col gap-4 h-full">
      <div className="flex items-center gap-2 text-[--text-primary] rounded-t-xl p-4 border-b">
        <ClassroomIcon />
        <h5 className="font-semibold">Mensalidades</h5>
      </div>
      {/* 
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <span className="text-xl text-[--text-primary] font-semibold">{installmentAmount}</span>
          <span className="text-xs">Mensalidades</span>
        </div>
      </div>
       */}

      <div className="grow">
        <table className="w-full">
          <thead>
            <tr className="text-sm font-semibold text-gray-500 bg-[--bg-tertiary]">
              <td className="px-4 py-2">Período letivo</td>
              <td className="px-4 py-2">Turma</td>
              <td className="px-4 py-2 text-center">Vencimento</td>
              <td className="px-4 py-2 text-center">Parcela</td>
              <td className="px-4 py-2 text-center">A receber</td>
              <td className="px-4 py-2 text-center">Desconto</td>
              <td className="px-4 py-2 text-center">Situação</td>
              <td className="px-4 py-2 text-center  w-[30px]">Ação</td>
            </tr>
          </thead>
          <tbody>
            {monthlyFeesView?.map(monthlyFee => (
              <tr key={monthlyFee.id} className="text-[--text-primary] text-sm">
                <td className="p-4">{monthlyFee.schoolYearName}</td>
                <td className="p-4">{monthlyFee.classroomName}</td>
                <td className="p-4 text-center">{monthlyFee.dueDate}</td>
                <td className="p-4 text-center">{monthlyFee.installment}</td>
                <td className="p-4 text-center text-green-600 font-semibold">{monthlyFee.totalAmount}</td>
                <td className="p-4 text-center text-[#FB7D5B]">{monthlyFee.discountAmount}</td>
                <td className={`${monthlyFee.delay && 'text-red-400'} p-4 text-center`}>{monthlyFee.status}</td>
                <td className="p-2 font-semibold text-center "><button disabled={monthlyFee.status === 'Pago'} className={`${monthlyFee.status === 'Pago'? 'bg-gray-300': 'bg-green-600'} w-fit text-gray-50 px-2 py-1 rounded-md`}>Receber</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
  )
}

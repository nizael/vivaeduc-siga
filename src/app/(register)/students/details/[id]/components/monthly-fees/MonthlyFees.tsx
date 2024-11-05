'use client'
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { IEnrollment } from "@/services/enrollment/IEnrollment"
import { IMonthlyFees, useMonthlyFeesStore } from "../../../../stores/useMonthlyFeesStore"
import { useEffect, useState } from "react"
import { Pagination } from "./Pagination"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"


export const MonthlyFees = ({ monthlyFees }: { monthlyFees: IMonthlyFees }) => {
  const { setMonthlyFees, monthlyFeesView, setMonthlyFeesCurrent, resetStore } = useMonthlyFeesStore()
  const [optionsKeys, setOptionsKeys] = useState<{ label: string, value: string }[]>([])
  const [classroomSelect, setClassroomSelect] = useState<string>('')

  useEffect(() => {
    if (monthlyFees) {
      const keys = Object.keys(monthlyFees)
      const options = keys.map(key => ({ label: key, value: key }))
      setOptionsKeys(options)
      setMonthlyFees(monthlyFees)
      setClassroomSelect(options[0]?.value)
    }
    return () => {
      resetStore()
    }
  }, [monthlyFees])

  useEffect(() => {
    if (classroomSelect) {
      setMonthlyFeesCurrent(classroomSelect)
    }
  }, [classroomSelect])

  if (!monthlyFeesView?.length) return null

  return (
    <section className="bg-gray-50 shadow-sm  w-full flex flex-col gap-4 h-full">
      <div className="flex items-center gap-2 bg-primary text-gray-50  px-4 py-2 border-b">
        <ClassroomIcon />
        <h5 className="font-semibold">Mensalidades</h5>
      </div>

      <div className="grow">
        <div className="grid grid-cols-4 px-4 py-2">
          <CustomSelect initialValue={optionsKeys[0]} options={optionsKeys} onChange={evt => setClassroomSelect(evt.currentTarget.value)} />
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-sm font-semibold text-gray-500 ">
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
            {monthlyFeesView?.map(monthlyFee => {
              const isDaley = new Date(monthlyFee.dueDate) < new Date() && monthlyFee.status === 'PENDING'
              return (
                <tr key={monthlyFee.id} className={`${isDaley ? 'text-red-400' : "text-primary"}  text-sm border-b"`}>
                  <td className="p-4">{monthlyFee.schoolYearName}</td>
                  <td className="p-4">{monthlyFee.classroomName}</td>
                  <td className="p-4 text-center">{new Date(monthlyFee.dueDate).toLocaleDateString('pt-BR')}</td>
                  <td className="p-4 text-center">{monthlyFee.installmentNumber}</td>
                  <td className={`${isDaley ? 'text-red-400' : "text-green-600"} "p-4 text-center  font-semibold"`}>{monthlyFee.toReceiveAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="p-4 text-center text-[#FB7D5B]">{monthlyFee.discountAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className={`${isDaley && 'text-red-400'} p-4 text-center`}>{monthlyFee.status === 'PAID' ? 'Pago' : 'Pendente'}</td>
                  <td className="p-2 font-semibold text-center "><button disabled={monthlyFee.status === 'PAID'} className={`${monthlyFee.status === 'PAID' ? 'bg-gray-300' : 'bg-green-600'} w-fit text-gray-50 px-2 py-1 rounded-md`}>Receber</button></td>
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

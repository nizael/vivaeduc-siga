'use client'
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { IMonthlyFee, IMonthlyFees, useMonthlyFeesStore } from "../../../../stores/useMonthlyFeesStore"
import { useEffect, useState } from "react"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { Pagination } from "@/components/pagination/Pagination"
import { useReceivePaymentModal } from "../../../../stores/useReceivePaymentModal"

export const MonthlyFees = ({ monthlyFees }: { monthlyFees: IMonthlyFees }) => {
  const { onOpen } = useReceivePaymentModal()
  const { setMonthlyFees, monthlyFeesCurrent, setCurrentPage, currentPage, monthlyFeesView, setMonthlyFeesCurrent, resetStore } = useMonthlyFeesStore()

  const [optionsKeys, setOptionsKeys] = useState<{ label: string, value: string }[]>([])
  const [classroomSelect, setClassroomSelect] = useState<string>('')

  useEffect(() => {
    if (monthlyFees) {
      const keys = Object.keys(monthlyFees)
      const options = keys.map(key => ({ label: key, value: key }))
      setOptionsKeys(options)
      setMonthlyFees(monthlyFees)
      setClassroomSelect(options[0]?.value || '')
    }
    return () => {
      resetStore()
    }
  }, [monthlyFees, resetStore, setMonthlyFees])

  useEffect(() => {
    if (classroomSelect) {
      setMonthlyFeesCurrent(classroomSelect)
    }
  }, [classroomSelect, setMonthlyFeesCurrent])

  function handleReceive(monthlyFee: IMonthlyFee) {
    useReceivePaymentModal.setState({
      monthlyFee
    })
    onOpen()

  }


  if (!monthlyFeesView?.length) return null

  return (
    <section className="bg-gray-50 shadow-sm w-full flex flex-col gap-4 h-full">
      <header className="flex items-center gap-2 bg-primary text-gray-50 px-4 py-2 border-b">
        <ClassroomIcon />
        <h5 className="font-semibold">Mensalidades</h5>
      </header>

      <div className="grow">
        <div className="grid grid-cols-4 px-4 py-2">
          <CustomSelect
            initialValue={optionsKeys[0]}
            options={optionsKeys}
            onChange={evt => setClassroomSelect(evt.currentTarget.value)}
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="text-sm font-semibold text-gray-500">
              {["Período letivo", "Turma", "Vencimento", "Parcela", "Total", "Desconto", "Valor pago", "A receber", "Situação", "Ação"].map((header, index) => (
                <td key={index} className={`px-4 py-2 ${index >= 2 ? 'text-center' : ''}`}>{header}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthlyFeesView.map(monthlyFee => {
              const isDelayed = new Date(monthlyFee.dueDate) < new Date() && monthlyFee.status === 'PENDING'
              const dueDateFormatted = new Date(monthlyFee.dueDate).toLocaleDateString('pt-BR')
              const amountFormatted = monthlyFee.amount?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              const discountFormatted = monthlyFee.discountAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              const toReceiveFormatted = monthlyFee.toReceiveAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              const previousPayments = monthlyFee.previousPayments.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

              return (
                <tr key={monthlyFee.id} className={`${isDelayed ? 'text-red-400' : 'text-primary'} text-sm border-b`}>
                  <td className="p-4">{monthlyFee.schoolYearName}</td>
                  <td className="p-4">{monthlyFee.classroomName}</td>
                  <td className="p-4 text-center">{dueDateFormatted}</td>
                  <td className="p-4 text-center">{monthlyFee.installmentNumber}</td>
                  <td className="p-4 text-center font-semibold">{amountFormatted}</td>
                  <td className="p-4 text-center text-[#FB7D5B]">{discountFormatted}</td>
                  <td className="p-4 text-center text-[#FB7D5B]">{previousPayments}</td>
                  <td className={`${isDelayed ? 'text-red-400' : 'text-green-600'} p-4 text-center font-semibold`}>{toReceiveFormatted}</td>
                  <td className={`${isDelayed ? 'text-red-400' : ''} p-4 text-center`}>{monthlyFee.status === 'PAID' ? 'Pago' : 'Pendente'}</td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleReceive(monthlyFee)}
                      disabled={monthlyFee.status === 'PAID'}
                      aria-label="Receber pagamento"
                      className={`${monthlyFee.status === 'PAID' ? 'bg-gray-300' : 'bg-green-600'} w-fit text-gray-50 px-2 py-1 rounded-md`}
                    >
                      Receber
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {monthlyFeesCurrent && <Pagination currentPage={currentPage} items={monthlyFeesCurrent} setCurrentPage={setCurrentPage} />}
    </section>
  )
}

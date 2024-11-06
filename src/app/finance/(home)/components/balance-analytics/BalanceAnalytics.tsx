'use client'
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { Chart } from "./Chart"
import { reportPaymentRecordsForMonth } from "@/services/report/reportGet"
import { useEffect, useState } from "react"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"


export const BalanceAnalytics = () => {
  const [dailySummary, setDailySummary] = useState<{ label: string, value: number }[]>([])
  const [weeklyTotal, setWeeklyTotal] = useState(0)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [month, setMonth] = useState(new Date().getMonth())

  useEffect(() => { setCurrentDate(new Date()) }, [])

  useEffect(() => {
    (async () => {
      const { data, status } = await reportPaymentRecordsForMonth(new Date().getFullYear(), month)
      if (status === 200) {
        setDailySummary(data.dailySummary)
        setWeeklyTotal(data.weeklyTotal)
      }
    })()
  }, [month])

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = parseInt(e.currentTarget.value)
    const updatedDate = new Date(currentDate.setMonth(newMonth))
    setMonth(newMonth)
    setCurrentDate(new Date(updatedDate))
  }

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]
  return (
    <section className="flex flex-col  bg-gray-50 shadow-sm p-6 w-full">
      <div className=" text-[--text-primary] flex items-center gap-6  ">
        <p className="text-lg font-semibold">Análise de saldo</p>
        <div className="flex flex-col items-end gap-0.5 ">
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Esta semana
          </p>
          <p className="text-[--text-primary] font-semibold ">{weeklyTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <CustomSelect
          className="w-32 border-none text-[--text-primary] "
          initialValue={{ value: `${currentDate.getMonth()}`, label: months[currentDate.getMonth()] }}
          options={months.map((month, index) => ({ label: month, value: `${index}` }))}
          onChange={handleMonthChange}
        />
      </div>
      <Chart dailySummary={dailySummary} />
    </section>
  )
}
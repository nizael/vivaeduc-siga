'use client'
import { useEffect, useState } from "react"
import { Day } from "./Day"
import { getDaysInMonth, getFirstDayOfMonth } from "@/utils/dateUtils"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { CalendarIcon } from "@/components/icons/CalendarIcon"

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const today = new Date()

  useEffect(() => { setCurrentDate(new Date()) }, [])

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = parseInt(e.currentTarget.value)
    const updatedDate = new Date(currentDate.setMonth(newMonth))
    setCurrentDate(new Date(updatedDate))
  }

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]

  const weeks = []
  let week: number[] = new Array(firstDay).fill(null)
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length > 0) {
    weeks.push(week)
  }

  return (
    <div className="flex flex-col w-full bg-gray-50  rounded-xl shadow-sm h-full">
      <div className="flex justify-between  rounded-t-xl p-4">
        <h5 className="text-[--text-primary] font-semibold flex items-center gap-2">
          <CalendarIcon />
          Calendário Escolar
        </h5>
        <CustomSelect
          onChange={handleMonthChange}
          className="w-32 border-none"
          initialValue={{ value: `${currentDate.getMonth()}`, label: months[currentDate.getMonth()] }}
          options={months.map((month, index) => ({ label: month, value: `${index}` }))}
        />
      </div>
      <div className="p-4 grow">
        <table className="w-full h-full table-fixed ">
          <thead>
            <tr className="text-center text-[--text-primary] text-sm font-semibold py-4">
              <td className="py-4">Dom</td>
              <td className="py-4">Seg</td>
              <td className="py-4">Ter</td>
              <td className="py-4">Qua</td>
              <td className="py-4">Qui</td>
              <td className="py-4">Sex</td>
              <td className="py-4">Sáb</td>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex} className="p-2 h-12 border">
                    {day ? <Day value={day}
                      isToday={today.getDate() === day && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()}
                      isSunday={dayIndex === 0}
                      isSaturday={dayIndex === 6}
                    /> : <div className="rounded-full p-2 h-[48px] w-[48px]" />}
                  </td>
                ))}
                {week.length < 7 &&
                  Array.from({ length: 7 - week.length }).map((_, i) => (
                    <td key={`empty-${i}`} className="p-2 border" ><div className="rounded-full p-2 h-[48px] w-[48px]" /></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

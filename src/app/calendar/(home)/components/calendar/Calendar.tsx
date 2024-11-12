'use client'
import { useEffect, useState } from "react"
import { Day } from "./Day"
import { getDaysInMonth, getFirstDayOfMonth } from "@/utils/dateUtils"
import { listEventsByDate } from "@/services/calendar-school/calendarSchoolGet"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { useCalendarStore } from "../../../stores/useCalendarStore"

export const Calendar = () => {
  const { onOpen, setEvents } = useCalendarStore()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectDay, setSelectDay] = useState(new Date().getDate())
  const [selectMonth, setSelectMonth] = useState(new Date().getMonth())
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const today = new Date()

  useEffect(() => {
    (async () => {
      const year = today.getFullYear()
      const { data, status } = await listEventsByDate(selectDay, selectMonth, year)
      if (status === 200) setEvents(data)
    })()
  }, [selectDay, selectMonth])

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = parseInt(e.currentTarget.value)
    const updatedDate = new Date(currentDate.setMonth(newMonth))
    setCurrentDate(new Date(updatedDate)) // Atualiza o estado com o novo mês
    setSelectMonth(newMonth)
  }

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]

  const weeks = []
  let week: number[] = new Array(firstDay).fill(null) // Preenche a primeira semana com dias vazios até o dia certo
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
    <section className="flex flex-col w-full bg-gray-50  shadow-sm min-h-[632px]">
      <div className="flex justify-end gap-4  rounded-t-xl p-4">
        <CustomSelect
          onChange={handleMonthChange}
          className="w-32 border-none"
          initialValue={{ value: `${currentDate.getMonth()}`, label: months[currentDate.getMonth()] }}
          options={months.map((month, index) => ({ label: month, value: `${index}` }))}
        />
        <button onClick={onOpen} className="border bg-[--bg-primary] text-gray-50 rounded-full h-[40px] px-4 flex items-center gap-1"><b className="text-2xl">+</b> Novo evento</button>
      </div>
      <div className="p-4 grow">
        <table className="w-full h-full table-fixed ">
          <thead>
            <tr className="text-center text-[--text-primary] text-sm font-semibold">
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
                  <td key={dayIndex} className="p-2  text-center align-middle">
                    {day ? <Day value={day}
                      isToday={today.getDate() === day && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()}
                      onClick={() => setSelectDay(day)}
                      isSelected={selectDay === day}
                      isSunday={dayIndex === 0}
                      isSaturday={dayIndex === 6}
                    /> : <div className="rounded-full p-2 h-12" />}
                  </td>
                ))}
                {/* Se a última semana tiver menos de 7 dias, preenche com células vazias */}
                {week.length < 7 &&
                  Array.from({ length: 7 - week.length }).map((_, i) => (
                    <td key={`empty-${i}`} className="p-2 " ><div className="rounded-full p-2 h-12" /></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

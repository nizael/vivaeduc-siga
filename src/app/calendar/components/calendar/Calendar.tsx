'use client'
import { useEffect, useState } from "react"
import { Day } from "./Day"
import { getDaysInMonth, getFirstDayOfMonth } from "@/utils/dateUtils"

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const today = new Date()

  useEffect(()=>{setCurrentDate(new Date())},[])// excluir depois

  // const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const newMonth = parseInt(e.target.value)
  //   const updatedDate = new Date(currentDate.setMonth(newMonth))
  //   setCurrentDate(new Date(updatedDate)) // Atualiza o estado com o novo mês
  // }

  // const months = [
  //   "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  //   "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  // ]

  // Dividindo os dias em semanas, preenchendo os dias vazios no início
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
    <section className=" bg-gray-50 p-4 rounded-lg shadow-sm h-full">
      {/* <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
          Anterior
        </button>

        <select
          value={currentDate.getMonth()}
          onChange={handleMonthChange}
          className="border p-2 rounded-md"
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
          Próximo
        </button>
      </div> */}
      <table className="w-full table-fixed h-full">
        <thead>
          <tr className="text-center text-[--text-primary] text-sm font-semibold">
            <td>Domingo</td>
            <td>Segunda</td>
            <td>Terça</td>
            <td>Quarta</td>
            <td>Quinta</td>
            <td>Sexta</td>
            <td>Sábado</td>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex} className="p-2 h-12 ">
                  {day ? <Day value={day}
                    isToday={today.getDate() === day && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()}
                    isSunday={dayIndex === 0}
                    isSaturday= {dayIndex === 6}
                  /> : <div className="border rounded-xl p-2 w-full h-full" />}
                </td>
              ))}
              {/* Se a última semana tiver menos de 7 dias, preenche com células vazias */}
              {week.length < 7 &&
                Array.from({ length: 7 - week.length }).map((_, i) => (
                  <td key={`empty-${i}`} className="p-2 " ><div className="border rounded-xl p-2 w-full h-full" /></td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

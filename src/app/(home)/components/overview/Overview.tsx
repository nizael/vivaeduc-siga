import { Kpi } from "./Kpi"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { EmployeeIcon } from "@/components/icons/EmployeeIcon"
import { CalendarIcon } from "@/components/icons/CalendarIcon"

export const Overview = () => {
  return (
    <section className="flex items-center p-4 rounded-lg bg-gray-50 justify-between shadow-sm">
      <Kpi bgColor="blue" icon={<Student2Icon />} label="Alunos" value="754" />
      <Kpi bgColor="orange" icon={<EmployeeIcon />} label="Funcionários" value="754" />
      <Kpi bgColor="yellow" icon={<CalendarIcon />} label="Eventos" value="754" />
    </section>
  )
}


import { Kpi } from "./Kpi"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { EmployeeIcon } from "@/components/icons/EmployeeIcon"
import { CalendarIcon } from "@/components/icons/CalendarIcon"
import { countStudentClassroomSubjectEventEmployee } from "@/services/report/reportGet"

export const Overview = async () => {
  const { data, status } = await countStudentClassroomSubjectEventEmployee()
  return (
    <section className="flex items-center p-4  bg-gray-50 justify-between shadow-sm">
      <Kpi bgColor="blue" icon={<Student2Icon />} label="Alunos" value={data.countStudents} />
      <Kpi bgColor="orange" icon={<EmployeeIcon />} label="Funcionários" value={data.countEmployees} />
      <Kpi bgColor="yellow" icon={<CalendarIcon />} label="Eventos" value={data.events}/>
    </section>
  )
}


import { AcademicIcon } from "../../icons/AcademicIcon"
import { CalenderIcon } from "../../icons/CalenderIcon"
import { ChatIcon } from "../../icons/ChatIcon"
import { EmployeeIcon } from "../../icons/EmployeeIcon"
import { FinanceIcon } from "../../icons/FinanceIcon"
import { GuardianIcon } from "../../icons/GuardianIcon"
import { HomeIcon } from "../../icons/HomeIcom"
import { Student2Icon } from "../../icons/Student2Icon"
import { LinkButton } from "./LinkButton"

export const NavigatorSection = () => {
  return (
    <nav className="w-full flex flex-col gap-2">
      <LinkButton icon={<HomeIcon />} label="Inicio" href={'/'} />
      <LinkButton icon={<Student2Icon />} label="Alunos" href={'/students'} />
      <LinkButton icon={<AcademicIcon />} label="Acadêmico" href={'/academic'} />
      <LinkButton icon={<EmployeeIcon />} label="Funcionários" href={'/employees'} />
      <LinkButton icon={<GuardianIcon />} label="Responsáveis" href={'/guardians'} />
      <LinkButton icon={<CalenderIcon />} label="Calendário" href={'/calender'} />
      <LinkButton icon={<FinanceIcon />} label="Financeiro" href={'/finance'} />
      <LinkButton icon={<ChatIcon />} label="Chat" href={'/chat'} />
    </nav>
  )
} 
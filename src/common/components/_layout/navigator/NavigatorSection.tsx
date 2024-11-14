import { AcademicIcon } from "../../icons/AcademicIcon"
import { CalendarIcon } from "../../icons/CalendarIcon"
import { ChatIcon } from "../../icons/ChatIcon"
import { EmployeeIcon } from "../../icons/EmployeeIcon"
import { FinanceIcon } from "../../icons/FinanceIcon"
import { GuardianIcon } from "../../icons/GuardianIcon"
import { HomeIcon } from "../../icons/HomeIcon"
import { Student2Icon } from "../../icons/Student2Icon"
import { LinkButton } from "./LinkButton"

export const NavigatorSection = () => {
  return (
    <nav className="w-full flex flex-col gap-2">
      <LinkButton icon={<HomeIcon />} label="Inicio" href={'/'} />
      <LinkButton icon={<AcademicIcon />} label="Acadêmico" href={'/academic'} />
      <LinkButton icon={<CalendarIcon />} label="Calendário" href={'/calendar'} />
      <LinkButton icon={<GuardianIcon />} label="Responsáveis" href={'/guardians'} />
      <LinkButton icon={<Student2Icon />} label="Alunos" href={'/students'} />
      <LinkButton icon={<EmployeeIcon />} label="Funcionários" href={'/employees'} />
      <LinkButton icon={<FinanceIcon />} label="Financeiro" href={'/finance'} />
      <LinkButton icon={<ChatIcon />} label="Chat" href={'/chats'} />
    </nav>
  )
} 
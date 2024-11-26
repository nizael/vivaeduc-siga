import { SchoolIcon } from "@/components/icons/SchoolIcon"

import { CalendarIcon } from "../../icons/CalendarIcon"
import { ChatIcon } from "../../icons/ChatIcon"
import { EmployeeIcon } from "../../icons/EmployeeIcon"
import { FinanceIcon } from "../../icons/FinanceIcon"
import { GuardianIcon } from "../../icons/GuardianIcon"
import { HomeIcon } from "../../icons/HomeIcon"
import { Student2Icon } from "../../icons/Student2Icon"
import { LinkButton } from "./LinkButton"
import { env } from "@/configs/env"

export const NavigatorSection = () => {

  return (
    <nav className="flex w-10 flex-col gap-2 grow">
      <LinkButton icon={<HomeIcon />} label="Inicio" href={'/'} />
      <LinkButton icon={<SchoolIcon />} label="Acadêmico" href={'/academic'} />
      <LinkButton icon={<CalendarIcon />} label="Calendário" href={'/calendar'} />
      <LinkButton icon={<GuardianIcon />} label="Responsáveis" href={'/guardians'} />
      <LinkButton icon={<Student2Icon />} label="Alunos" href={'/students'} />
      <LinkButton icon={<EmployeeIcon />} label="Funcionários" href={'/employees'} />
      <LinkButton icon={<FinanceIcon />} label="Financeiro" href={'/finance'} />
      {(env.NODE_ENV !== 'production') && <LinkButton icon={<ChatIcon />} label="Chat" href={'/chats'} />}
    </nav>
  )
} 
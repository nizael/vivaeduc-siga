import { CalendarIcon } from "@/components/icons/CalendarIcon"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { BookIcon } from "@/components/icons/BookIcon"
import { SubjectIcon } from "@/components/icons/SubjectIcon"
import { SwipeIcon } from "@/components/icons/SwipeIcon"
import { MenuItem } from "./MenuItem"
import Link from "next/link"
import { HomeIcon } from "@/components/icons/HomeIcom"
import { SchoolIcon } from "@/components/icons/SchoolIcon"
import { UsersGroupIcon } from "@/components/icons/UsersGroupIcon"
import { UserHeartIcon } from "@/components/icons/UserHeartIcon"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { FinanceIcon } from "@/components/icons/FinanceIcon"

export const AcademicMenu = ({ moduleSelect }: { moduleSelect: 'ACADEMIC' | 'FINANCE' | 'ADMIN' }) => {
  const schoolYearMenu: { href: string, label: string }[] = [
    { href: '/academic/school-years', label: 'Listar Períodos letivos' },
    // { href: '/', label: 'Criar Período letivo' },
  ]
  const courseMenu: { href: string, label: string }[] = [
    { href: '/academic/courses', label: 'Listar cursos' },
    // { href: '/', label: 'Criar curso' },
  ]
  const gradeMenu: { href: string, label: string }[] = [
    { href: '/academic/grades', label: 'Listar séries' },
    // { href: '/', label: 'Criar série' },
  ]
  const classroomMenu: { href: string, label: string }[] = [
    { href: '/academic/classrooms', label: 'Listar turmas' },
    // { href: '/', label: 'Criar turma' },
  ]
  const subjectMenu: { href: string, label: string }[] = [
    { href: '/academic/subjects', label: 'Listar disciplinas' },
    // { href: '/', label: 'Criar disciplina' },
  ]

  const calendarMenu: { href: string, label: string }[] = [
    { href: '/calendar', label: 'Listar eventos' },
  ]
  if (moduleSelect !== 'ACADEMIC') return null
  return (
    <div className="flex flex-col gap-1">
      <Link href={'/'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><HomeIcon className="w-4" />Inicio</Link>
      <Link href={'/academic'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><SchoolIcon className="w-4" />Acadêmico</Link>
      <Link href={'/calendar'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><CalendarIcon className="w-4" />Calendário</Link>
      <Link href={'/guardians'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><UserHeartIcon className="w-4" />Responsáveis</Link>
      <Link href={'/employees'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><UsersGroupIcon className="w-4" />Funcionários</Link>
      <Link href={'/students'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><Student2Icon className="w-4" />Estudantes</Link>
      <Link href={'/finance'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><FinanceIcon className="w-4" />Financeiro</Link>
    </div>
  )
}

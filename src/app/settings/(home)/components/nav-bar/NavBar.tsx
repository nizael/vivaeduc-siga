import { CalendarIcon } from "@/components/icons/CalendarIcon"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { SchoolIcon } from "@/components/icons/SchoolIcon"
import { SubjectIcon } from "@/components/icons/SubjectIcon"
import Link from "next/link"
import { ReactNode } from "react"

export const NavBar = () => {
  return (
    <section className="p-4 rounded-xl bg-gray-50 flex gap-4">
      <NavButton href="/settings/enrollment-requirement" label="Requistios de matrícula" />
      {/*  
      <NavButton href="/finance/courses" label="Cursos" icon={<SchoolIcon />} />
      <NavButton href="/finance/grades" label="Séries" />
      <NavButton href="/finance/classrooms" label="Turmas" icon={<ClassroomIcon />} />
      <NavButton href="/finance/subjects" label="Disciplinas" icon={<SubjectIcon />} />
      <NavButton href="/" label="Grade Curricular" />
      <NavButton href="/" label="Diário de Classe" />
      <NavButton href="/" label="Notas" />
      <NavButton href="/" label="Frequências" />
      <NavButton href="/" label="Avaliações" />
       */}
    </section>
  )
}

export const NavButton = ({ label, href, icon }: { label: string, href: string, icon?: ReactNode }) => {
  return (
    <Link href={href} className="flex items-center gap-1 shadow-sm bg-[#C1BBEB] bg-opacity-50 rounded-md font-semibold text-sm text-[--text-primary] px-4 py-2">
      {icon}
      {label}
    </Link>
  )
}
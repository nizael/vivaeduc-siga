'use client'
import { CalendarIcon } from "@/components/icons/CalendarIcon"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { BookIcon } from "@/components/icons/BookIcon"
import { SubjectIcon } from "@/components/icons/SubjectIcon"
import { SwipeIcon } from "@/components/icons/SwipeIcon"
import Link from "next/link"
import { ReactNode } from "react"
import { BooksIcon } from "@/components/icons/BooksIcon"
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"

export const NavBar = () => {
  return (
    <section className="p-4 bg-gray-50 flex gap-4 shadow-sm max-sm:flex-col">
      <NavButton href="/academic/school-years" label="Períodos letivo" icon={<CalendarIcon />} />
      <NavButton href="/academic/courses" label="Cursos" icon={<BookIcon />} />
      <NavButton href="/academic/grades" label="Séries" icon={<SwipeIcon />} />
      <NavButton href="/academic/classrooms" label="Turmas" icon={<ClassroomIcon />} />
      <NavButton href="/academic/subjects" label="Disciplinas" icon={<SubjectIcon />} />
      <NavButton href="/academic/curriculum" label="Grades currículares" icon={<BooksIcon />} />
      {/* <NavButton href="/" label="Grade Curricular" />
      <NavButton href="/" label="Diário de Classe" />
      <NavButton href="/" label="Notas" />
      <NavButton href="/" label="Frequências" />
      <NavButton href="/" label="Avaliações" /> */}
    </section>
  )
}

export const NavButton = ({ label, href, icon }: { label: string, href: string, icon?: ReactNode }) => {
  const { setIsLoading } = useLoadingSpinnerStore()
  return (
    <Link onClick={() => setIsLoading(true)} href={href} className="flex items-center gap-1 shadow-sm bg-[#C1BBEB] bg-opacity-50 rounded-md font-semibold text-sm text-[--text-primary] px-4 py-2">
      {icon}
      {label}
    </Link>
  )
}
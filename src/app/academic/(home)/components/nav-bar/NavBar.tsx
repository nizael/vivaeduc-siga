import Link from "next/link"

export const NavBar = () => {
  return (
    <section className="p-4 rounded-xl bg-gray-50 flex gap-4">
      <NavButton href="/academic/academic-years" label="Períodos" />
      <NavButton href="/academic/classrooms" label="Turmas" />
      <NavButton href="/academic/grades" label="Séries" />
      <NavButton href="/academic/subjects" label="Disciplinas" />
      <NavButton href="/academic/courses" label="Cursos" />
      {/* <NavButton href="/" label="Grade Curricular" />
      <NavButton href="/" label="Diário de Classe" />
      <NavButton href="/" label="Notas" />
      <NavButton href="/" label="Frequências" />
      <NavButton href="/" label="Avaliações" /> */}
    </section>
  )
}

export const NavButton = ({ label, href }: { label: string, href: string }) => {
  return (
    <Link href={href} className="flex items-center gap-1 shadow-sm bg-[#C1BBEB] bg-opacity-50 rounded-md font-semibold text-sm text-[--text-primary] px-4 py-2">
      {label}
    </Link>
  )
}
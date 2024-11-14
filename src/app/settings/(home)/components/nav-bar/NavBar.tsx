import Link from "next/link"
import { ReactNode } from "react"

export const NavBar = () => {
  return (
    <section className="p-4 bg-gray-50 flex gap-4 shadow-sm max-sm:flex-col">
      <NavButton href="/settings/enrollment-requirement" label="Requisitos de matrícula" />
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
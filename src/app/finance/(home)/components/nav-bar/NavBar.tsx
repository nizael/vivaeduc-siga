'use client'
import { env } from "@/configs/env"
import Link from "next/link"
import { ReactNode } from "react"

export const NavBar = () => {
  return (
    <section className="p-4 shadow-sm bg-gray-50 flex gap-4 max-[769px]:flex-col">
      <NavButton href="/finance/payment-plans" label="Planos de pagamento" />
      {env.NODE_ENV !== 'production' && (
        <>
          <NavButton href="/finance/reports" label="Relatótios" />
          <NavButton href="/finance/reports" label="Contas a pagar" />
          <NavButton href="/finance/reports" label="Caixas" />
        </>
      )}
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
'use client'
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore"
import { env } from "@/configs/env"
import Link from "next/link"
import { ReactNode } from "react"

export const NavBar = () => {

  return (
    <section className="p-4 bg-gray-50 flex gap-4 shadow-sm max-sm:flex-col">
      <NavButton href="/settings/enrollment-requirement" label="Requisitos de matrícula" />
      {(env.NODE_ENV !== 'production') && (
        <>
        <NavButton href="/settings/contracts" label="Contratos" />
        <NavButton href="/settings/receipts" label="Recibos" />
        <NavButton href="/settings/permissions" label="Permissões" />
        </>
      )
      }
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
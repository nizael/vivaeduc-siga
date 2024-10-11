'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ReactNode } from "react"

export const LinkButton = ({ icon, label, href }: { icon: ReactNode, label: string, href: string }) => {
  const pathname = usePathname()
  const isHome = href === '/'
  const isActive = isHome ? pathname === href : pathname.startsWith(href)
  return (
    <Link href={href} className={`${isActive ? 'bg-[#F3F4FF]  text-[--text-primary]' : 'bg-[--bg-primary] text-[#C1BBEB]'} rounded-l-full w-full flex items-center gap-4  font-semibold pl-4 py-2 text-base`}>
      {icon}
      {label}
    </Link>
  )
}
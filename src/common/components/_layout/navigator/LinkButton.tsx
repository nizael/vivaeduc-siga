'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ReactNode } from "react"
import { useAuthDataStore } from "../../../../app/(auth)/stores/useAuthData";

interface ILinkButtonProps {
  icon: ReactNode
  label: string
  href: string
  onClick?(): void
  permission?: string
}
export const LinkButton = ({ icon, label, href, onClick, permission }: ILinkButtonProps) => {
  const pathname = usePathname()
  const { userData } = useAuthDataStore()
  const isHome = href === '/'
  const isActive = isHome ? pathname === href : pathname.startsWith(href)
  if (permission && !userData?.permissions.includes(permission)) return null
  return (
    <Link onClick={onClick} href={href} className={`${isActive ? 'bg-[#F3F4FF]  text-[--text-primary]' : 'bg-[--bg-primary] text-[#C1BBEB]'} rounded-l-full w-full flex items-center gap-4  font-semibold pl-4 py-2 text-base`}>
      {icon}
      {label}
    </Link>
  )
}
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ReactNode } from "react"
import { useAuthDataStore } from "../../../../app/(auth)/stores/useAuthData";
import { useLoadingSpinnerStore } from "@/components/loading-spinner/stores/useLoadingSpinnerStore";

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
  const { setIsLoading } = useLoadingSpinnerStore()

  const handleClick = () => {
    if (!isActive) setIsLoading(true)
    if (onClick) onClick()
  }
  return (
    <Link onClick={handleClick} href={href} className={`${isActive ? 'bg-[#F3F4FF]  text-[--text-primary]' : 'bg-[--bg-primary] text-[#C1BBEB]'} rounded-md w-10 h-10 flex items-center justify-center gap-4 text-base`}>
      {icon}
    </Link>
  )
}
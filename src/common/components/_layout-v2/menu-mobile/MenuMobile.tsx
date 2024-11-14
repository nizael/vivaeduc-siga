'use client'
import { useMobileMenuStore } from "../stores/useMobileMenuStore"
import { FinanceIcon } from "../../icons/FinanceIcon"
import { SettingsIcon } from "../../icons/SettingsIcon"
import { XIcon } from "../../icons/XIcon"
import { SchoolIcon } from "@/components/icons/SchoolIcon"
import Link from "next/link"
import { useEffect } from "react"
import { CalendarIcon } from "@/components/icons/CalendarIcon"
import { HomeIcon } from "@/components/icons/HomeIcon"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { UserHeartIcon } from "@/components/icons/UserHeartIcon"
import { UsersGroupIcon } from "@/components/icons/UsersGroupIcon"
import { Logout } from "../side-bar/Logout"
import { LogoutMobile } from "./LogoutMobile"

export const MenuMobile = () => {
  const { isOpen, onClose } = useMobileMenuStore()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen, onClose])

  if (!isOpen) return null
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-70 z-20 flex items-center justify-center">
      <div className="w-full h-full flex flex-col bg-gray-50">
        <div className="border-b h-12 p-2 flex items-center justify-between">
        <p className="font-semibold text-[--text-primary]">Menu</p>
          <button onClick={onClose}><XIcon /></button>
        </div>
        <div className="flex flex-col gap-1 p-2 grow">
          <Link onClick={onClose} href={'/'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><HomeIcon className="w-4" />Inicio</Link>
          <Link onClick={onClose} href={'/academic'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><SchoolIcon className="w-4" />Acadêmico</Link>
          <Link onClick={onClose} href={'/calendar'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><CalendarIcon className="w-4" />Calendário</Link>
          <Link onClick={onClose} href={'/guardians'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><UserHeartIcon className="w-4" />Responsáveis</Link>
          <Link onClick={onClose} href={'/employees'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><UsersGroupIcon className="w-4" />Funcionários</Link>
          <Link onClick={onClose} href={'/students'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><Student2Icon className="w-4" />Estudantes</Link>
          <Link onClick={onClose} href={'/finance'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><FinanceIcon className="w-4" />Financeiro</Link>
        </div>
        <div className="flex flex-col overflow-y-auto p-2 ">
          <Link onClick={onClose} href={'/school'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><SchoolIcon className="w-4" />Escola</Link>
          <Link onClick={onClose} href={'/settings'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><SettingsIcon className="w-4" />Configurações</Link>
          <LogoutMobile />
        </div>
      </div>
    </div>
  )
}

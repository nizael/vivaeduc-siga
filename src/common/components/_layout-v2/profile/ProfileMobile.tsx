'use client'
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
import { LogoutMobile } from "../menu-mobile/LogoutMobile"
import { useProfileMobileStore } from "../stores/useProfileMobileStore"
import Image from "next/image"
import { UserIcon } from "@/components/icons/UserIcon"

export const ProfileMobile = () => {
  const { isOpen, onClose } = useProfileMobileStore()

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
          <p className="font-semibold text-[--text-primary]">Perfil</p>
          <button onClick={onClose}><XIcon /></button>
        </div>
        <div className="flex flex-col gap-4 p-2 grow">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border bg-bg-tertiary overflow-hidden">
              <Image src={'/'} alt="" width={40} height={40} />
            </div>
            <div >
              <p className="text-[--text-primary] font-semibold text-sm">Nizael Gomes Valente</p>
              <p className="text-gray-500 text-xs">nizaelvalente@gmail.com</p>
            </div>
          </div>
          <Link onClick={onClose} href={'/'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><UserIcon className="w-4" />Meus dados</Link>
        </div>
      </div>
    </div>
  )
}

'use client'
import { XIcon } from "../../icons/XIcon"
import Link from "next/link"
import { useEffect } from "react"
import { useProfileMobileStore } from "../stores/useProfileMobileStore"
import Image from "next/image"
import { UserIcon } from "@/components/icons/UserIcon"
import { Logout } from "../side-bar/Logout"

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
    <div onMouseLeave={onClose} className="absolute top-0 right-2 max-[769px]:left-0 max-[769px]:w-full md:shadow-sm  max-[769px]:h-full bg-opacity-70 z-20 flex items-center justify-center">
      <div className="w-full h-full flex flex-col bg-gray-50">
        <div className="border-b h-12 p-2 flex items-center justify-between">
          <p className="font-semibold text-[--text-primary]">Perfil</p>
          <button className="max-[769px]:block hidden" onClick={onClose}><XIcon /></button>
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
          <div className="flex flex-col gap-4 p-2">
            <Link onClick={onClose} href={'/'} className="flex items-center font-semibold text-[--text-primary] text-sm gap-1"><UserIcon className="w-5" />Meus dados</Link>
            <Logout />
          </div>
        </div>
      </div>
    </div>
  )
}

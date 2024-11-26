'use client'
import { useRouter } from "next/navigation"
import { useAuthDataStore } from "../../../../app/(auth)/stores/useAuthData"
import { cookiesManager } from "../../../../di/dependencyInjection"
import { LogoutIcon } from "../../icons/LogoutIcon"
import { env } from "@/configs/env"

export const LogoutMobile = () => {
  const { reset: resetStore } = useAuthDataStore()
  const router = useRouter()
  function handleClick() {
    cookiesManager.deleteCookie('user_token')
    resetStore()
    const authUrl = env.NEXT_PUBLIC_AUTH_BASE_URL
   if(authUrl) router.push(authUrl)
  }
  return (
    <button onClick={handleClick}  className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1">
      <LogoutIcon className="w-4" />
      Sair
    </button>
  )
}
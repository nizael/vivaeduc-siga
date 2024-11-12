'use client'
import { useRouter } from "next/navigation"
import { useAuthDataStore } from "../../../../app/(auth)/stores/useAuthData"
import { cookiesManager } from "../../../../di/dependencyInjection"
import { LogoutIcon } from "../../icons/LogoutIcon"

export const Logout = () => {
  const { reset: resetStore } = useAuthDataStore()
  const router = useRouter()
  function handleClick() {
    cookiesManager.deleteCookie('user_token')
    resetStore()
    router.push('http://localhost:3001')
  }
  return (
    <button onClick={handleClick} className={`  text-[#C1BBEB] rounded-md w-10 h-10 flex items-center justify-center gap-4 text-base`}>
      <LogoutIcon />
    </button>
  )
}
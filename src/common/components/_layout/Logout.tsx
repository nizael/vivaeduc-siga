'use client'
import { useAuthDataStore } from "../../../app/(auth)/stores/useAuthData"
import { cookiesManager } from "../../../di/dependencyInjection"
import { LogoutIcon } from "../icons/LogoutIcon"

export const Logout = () => {
  const { reset: resetStore } = useAuthDataStore()
  function handleClick() {
    cookiesManager.deleteCookie('user_token')
    resetStore()
    location.href = '/session'
  }
  return (

    <button onClick={handleClick} className={` 'bg-[--bg-primary] text-[#C1BBEB] rounded-l-full w-full flex items-center gap-4  font-semibold pl-4 py-2 text-base`}>
      <LogoutIcon />
      Sair
    </button>
  )
}
'use client'
import { useAuthDataStore } from "../../../app/(auth)/stores/useAuthData"
import { cookiesManager } from "../../../di/dependencyInjection"
import { LogoutIcon } from "../icons/LogoutIcon"
import { LinkButton } from "./navigator/LinkButton"

export const Logout = () => {
  const { reset: resetStore } = useAuthDataStore()
  function handleClick() {
    cookiesManager.deleteCookie('user_token')
    resetStore()
  }
  return (
    <LinkButton icon={<LogoutIcon />} label="Sair" href={'/session'} onClick={handleClick} />
  )
}
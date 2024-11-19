'use client'
import { useEffect } from "react"
import { IUserData, useAuthDataStore } from "../../../app/(auth)/stores/useAuthData"

export const SetUserData = ({ authData }: { authData: IUserData }) => {
  const { reset, setUserData } = useAuthDataStore()

  useEffect(() => {
    if (authData) {
      setUserData(authData)
    }
    return reset
  }, [authData])
  return null
}
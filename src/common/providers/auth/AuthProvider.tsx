import { PropsWithChildren } from "react"
import { guardian } from "../../../di/dependencyInjection"
import { SetUserData } from "./SetUserData"

export const AuthProvider = async ({ children }: PropsWithChildren) => {
  const authData = await guardian.authenticate()
  return (
    <>
      <SetUserData authData={authData} />
      {children}
    </>
  )
}
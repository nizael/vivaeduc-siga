'use client'
import { BellIcon } from "../icons/BellIcon"
import { ReactNode, useEffect } from "react";
import { IUserData, useAuthDataStore } from "../../../app/(auth)/stores/useAuthData";

export const roles = {
  MANAGER: 'Gerente',
  CONSULTANT: 'Consultor(a)',
  CFO: 'Diretor Financeiro',
  TEACHER: 'Professor(a)',
  COORDINATOR: 'Coordenador(a)',
  SECRETARY: 'Secretário(a)',
  ASSISTANT: 'Assistente',
  ADVISOR: 'Orientador(a)',
  PRINCIPAL: 'Diretor(a)'
}

export const Header = ({ titlePage, authData }: { titlePage: ReactNode, authData: IUserData }) => {
  const { userData, reset, setUserData } = useAuthDataStore()

  useEffect(() => {
    if (authData) {
      setUserData(authData)
    }
    return reset
  }, [authData])


  return (
    <header className="col-start-2 col-end-3 flex items-center justify-between  px-4 gap-4 border-b">
      <div className="flex items-center justify-between grow">
        <h1 className="text-[--text-primary] text-xl font-semibold">{titlePage}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="grid place-content-center rounded-full bg-gray-50 p-1 text-slate-500">
          <BellIcon />
        </button>
        {/* <button className="grid place-content-center rounded-full bg-gray-50 p-1 text-slate-500">
          <SettingsIcon />
        </button> */}
        {userData && (<div className="flex flex-col items-end">
          <p className="text-[--text-primary] font-semibold">{userData?.name}</p>
          <p className="text-xs text-gray-500">{roles[userData.role as keyof typeof roles]}</p>
        </div>)
        }
        <div className="bg-[#C1BBEB] w-[40px] h-[40px] rounded-full flex-none overflow-hidden">
          {/* {user?.profile && <Image src={user?.profile} alt={user?.profile} width={40} height={40} />} */}
        </div>
      </div>
    </header>
  )
}
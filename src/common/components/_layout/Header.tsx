'use client'
// import Image from "next/image"
import { BellIcon } from "../icons/BellIcon"
import { useEffect } from "react";
import { IUserData, useAuthData } from "../../../app/(auth)/stores/useAuthData";
// import { SearchIcon } from "../icons/SearchIcon"
// import { SettingsIcon } from "../icons/SettingsIcon"

// const user = {
//   id: '1',
//   name: 'Thalita',
//   role: 'Admin',
//   image: '/temp/employee.jpg',
//   studentName: 'Samantha William',
//   classroom: 'VII A'
// }



export const Header = ({ titlePage, authData }: { titlePage: string, authData: IUserData }) => {
  const { userData: user } = useAuthData()

  useEffect(() => {
    if (authData) {
      useAuthData.setState({
        userData: authData
      })
    }
  }, [authData])

  return (
    <header className="col-start-2 col-end-3 flex items-center justify-between  px-4 gap-4 border-b">
      <div className="flex items-center justify-between grow">
        <h1 className="text-[--text-primary] text-3xl font-semibold">{titlePage}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="grid place-content-center rounded-full bg-gray-50 p-1 text-slate-500">
          <BellIcon />
        </button>
        {/* <button className="grid place-content-center rounded-full bg-gray-50 p-1 text-slate-500">
          <SettingsIcon />
        </button> */}
        <div className="flex flex-col items-end">
          <p className="text-[--text-primary] font-semibold">{user?.name}</p>
          <p className="text-xs text-gray-500">{user?.profile}</p>
        </div>
        <div className="bg-[#C1BBEB] w-[40px] h-[40px] rounded-full flex-none overflow-hidden">
          {/* {user?.profile && <Image src={user?.profile} alt={user?.profile} width={40} height={40} />} */}
        </div>
      </div>
    </header>
  )
}
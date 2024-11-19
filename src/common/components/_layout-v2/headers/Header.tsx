'use client'
import { BellIcon } from "@/components/icons/BellIcon";
import { Menu2Icon } from "../../icons/Menu2Icon";
import { useMobileMenuStore } from "../stores/useMobileMenuStore";
import { UserIcon } from "@/components/icons/UserIcon";
import { useProfileMobileStore } from "../stores/useProfileMobileStore";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import Link from "next/link";

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

export const Header = () => {
  const { onOpen } = useMobileMenuStore()
  const { onOpen: onOpenProfile } = useProfileMobileStore()

  return (
    <header className="col-start-1 col-end-3 max-[769px]:col-end-2 flex items-center h-12 px-2 border-b bg-gray-50">
      <button className="max-[769px]:block hidden" onClick={onOpen}>
        <Menu2Icon />
      </button>
      <div className="flex items-center gap-2 max-[769px]:hidden">
        <p className="w-9 h-9  rounded-lg font-bold text-gray-50 text-xl  grid place-content-center bg-[#FB7D5B]">ve</p>
        <p className=" text-2xl text-[--text-primary]"><b className="font">Viva</b>Educ</p>
      </div>
      <div className="flex grow gap-4 justify-end">
        <button className="w-10 h-10 grid place-content-center"><BellIcon /></button>
        {/* <Link href={'/settings'} className="w-10 h-10 grid place-content-center rounded-full border">
        <SettingsIcon />
        </Link> */}
        <button onClick={onOpenProfile} className="w-10 h-10 grid place-content-center rounded-full border"><UserIcon /></button>
      </div>
    </header>
  )
}


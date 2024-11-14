import { UserIcon } from "@/components/icons/UserIcon"
import { AcademicMenu } from "../menu-mobile/AcademicMenu"
import { FinanceIcon } from "@/components/icons/FinanceIcon"
import { SchoolIcon } from "@/components/icons/SchoolIcon"
import { HomeIcon } from "@/components/icons/HomeIcon"
import Link from "next/link"

export const MenuWeb = () => {
  return (
    <nav className="text-[--text-primary] h-full max-[769px]:hidden flex ">
      <Link href={'/'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><HomeIcon className="w-5" />Inicio</Link>
        <div className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1 group">
          <span className="text-sm font-semibold flex items-center gap-1"><SchoolIcon className="w-5" /> Acadêmico</span>
          <div className="w-full bg-gray-50 shadow-sm left-0 top-9 p-4 absolute group-hover:flex hidden">
            <AcademicMenu moduleSelect="ACADEMIC" />
          </div>
        </div>
      <ul className="h-full">
        <li className="float-left px-2 cursor-default group p-2">
          <span className="text-sm font-semibold flex items-center gap-1"><UserIcon className="w-5" /> Admistrativo</span>
          <div className="w-full bg-gray-50 shadow-sm left-0 top-9 p-4 absolute group-hover:flex hidden">
            Admistrativo
          </div>
        </li>
        <li className="float-left px-2 cursor-default group p-2">
          <span className="text-sm font-semibold flex items-center gap-1"> <FinanceIcon className="w-5" /> Financeiro</span>
          <div className="w-full bg-gray-50 shadow-sm left-0 top-9 p-4 absolute group-hover:flex hidden">
          </div>
        </li>
      </ul>
    </nav>
  )
}
import { MenuItem } from "./MenuItem"
import { UsersGroupIcon } from "@/components/icons/UsersGroupIcon"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { UserHeartIcon } from "@/components/icons/UserHeartIcon"
import { FinanceIcon } from "@/components/icons/FinanceIcon"
import Link from "next/link"
import { HomeIcon } from "@/components/icons/HomeIcom"

export const FinanceMenu = ({ moduleSelect }: { moduleSelect: 'ACADEMIC' | 'FINANCE' | 'ADMIN' }) => {
  const studentMenu: { href: string, label: string }[] = [
    { href: '/students', label: 'Listar alunos' },
    { href: '/students/create', label: 'Novo aluno' },
  ]
  const employeeMenu: { href: string, label: string }[] = [
    { href: '/employees/', label: 'Listar funcionários' },
    { href: '/employees/create', label: 'Novo funcionário' },
  ]
  const guradianMenu: { href: string, label: string }[] = [
    { href: '/guardians', label: 'Listar responsáveis' },
    { href: '/guardians/create', label: 'Novo responsável' },
    // { href: '/', label: 'Criar série' },
  ]
  if (moduleSelect !== 'FINANCE') return null
  return (
    <div className="flex flex-col gap-1">
      <Link href={'/finance'} className="flex items-center font-semibold text-[--text-primary] p-2 text-sm gap-1"><HomeIcon className="w-4" />Inicio</Link>
      <MenuItem icon={<FinanceIcon className="w-4" />} list={studentMenu} title='Planos de pagamento' />
    </div>
  )
}

import { MenuItem } from "./MenuItem"
import { UsersGroupIcon } from "@/components/icons/UsersGroupIcon"
import { Student2Icon } from "@/components/icons/Student2Icon"
import { UserHeartIcon } from "@/components/icons/UserHeartIcon"

export const AdminMenu = ({ moduleSelect }: { moduleSelect: 'ACADEMIC' | 'FINANCE' | 'ADMIN' }) => {
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
  if (moduleSelect !== 'ADMIN') return null
  return (
    <div className="flex flex-col gap-1">
      <MenuItem icon={<Student2Icon className="w-4" />} list={studentMenu} title='Alunos' />
      <MenuItem icon={<UsersGroupIcon className="w-4" />} list={employeeMenu} title='Funcionários' />
      <MenuItem icon={<UserHeartIcon className="w-4" />} list={guradianMenu} title='Responsáveis' />
    </div>
  )
}

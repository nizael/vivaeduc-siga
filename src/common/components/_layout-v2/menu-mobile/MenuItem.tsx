import { DropdownIcon } from "@/components/icons/DropdownIcon"
import Link from "next/link"
import { ReactNode } from "react"

interface IMenuItemsProps {
  icon: ReactNode
  title: string
  list: { href: string, label: string }[]
}


export const MenuItem = ({ icon, list, title }: IMenuItemsProps) => {
  return (
    <details className="text-[--text-primary]">
      <summary className="flex items-center justify-between p-2 text-sm gap-1">{icon} <b className="grow">{title}</b><DropdownIcon className="w-3" /></summary>
      <ul className="text-sm px-4">
        {list.map((item, index) => <li key={`item_${index}`} className="p-2 hover:bg-gray-100"><Link href={item.href}>{item.label}</Link></li>)}
      </ul>
    </details>
  )
}
import { DotsIcon } from "@/components/icons/DotsIcon"
import Link from "next/link"

interface INavMenuProps {
  items: {
    href: string
    label: string
  }[],
  position?: 'top' | 'bottom'
}
export const NavMenu = ({ items, position = 'top' }: INavMenuProps) => {
  const positions = {
    bottom: 'translate-y-full bottom-4',
    top: '-translate-y-full top-4',
  }
  return (
    <div className="relative group text-gray-500" tabIndex={0} >
      <DotsIcon />
      <ul className={`${positions[position]} absolute group-focus-within:flex hidden flex-col bg-gray-50 shadow-md rounded-xl  left-0  -translate-x-full border`}>
        {items.map((item, index) => <Link className="py-2 px-4 hover:bg-[--bg-tertiary] text-start font-medium border-b last:border-transparent first:rounded-t-xl last:rounded-b-xl " key={`empty_${index}`} href={item.href}>{item.label}</Link>)}
      </ul>
    </div>
  )
}
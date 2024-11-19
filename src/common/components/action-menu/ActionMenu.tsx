'use client'
import { DotsIcon } from "@/components/icons/DotsIcon"

interface INavMenuProps {
  items: {
    onClick(): void
    label: string
  }[],
  position?: 'top' | 'bottom'
}
export const ActionMenu = ({ items, position = 'top' }: INavMenuProps) => {
  const positions = {
    bottom: 'translate-y-full bottom-4',
    top: '-translate-y-full top-4',
  }
  return (
    <div className="relative group text-gray-500" tabIndex={0} >
      <DotsIcon />
      <ul className={`${positions[position]} absolute group-focus-within:flex hidden flex-col bg-gray-50 shadow-md rounded-xl  left-0  -translate-x-full border`}>
        {items.map((item, index) => <button onClick={item.onClick} className="py-2 px-4 hover:bg-[--bg-tertiary] text-start font-medium border-b last:border-transparent first:rounded-t-xl last:rounded-b-xl " key={`empty_${index}`} >{item.label}</button>)}
      </ul>
    </div>
  )
}
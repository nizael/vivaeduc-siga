
import { ReactNode } from "react"

interface IListViewProps {
  icon?: ReactNode
  id: string
  value: string
  date: string
  transaction: 'incoming' | 'outgoing'
}

export const ListView = ({ date, id, transaction, value, icon }: IListViewProps) => {

  return (
    <li className="flex items-center gap-2 justify-between">
      <div className={`${transaction === 'incoming' ? 'bg-[#C1BBEB] text-[--text-primary]' : 'bg-[#FB7D5B] text-gray-50'}  grid place-content-center w-[40px] h-[40px] rounded-full ] flex-none overflow-hidden`}>
        {icon}
      </div>
      <div className="flex flex-col grow gap-1">
        <p className="text-sm font-semibold text-[--text-primary]">{id}</p>
        <p className="text-xs text-gray-500 truncate">{date}</p>
      </div>
      <div className="flex h-full text-gray-500 text-sm">
        <p>{value}</p>
      </div>
    </li>
  )
}
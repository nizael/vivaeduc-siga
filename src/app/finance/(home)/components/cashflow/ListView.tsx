
import { ReactNode } from "react"

interface IListViewProps {
  icon?: ReactNode
  amount: string
  paymentMethod: string
  transaction: 'incoming' | 'outgoing'
}

export const ListView = ({ paymentMethod, transaction, amount, icon }: IListViewProps) => {

  return (
    <li className="flex items-center gap-2 justify-between">
      <div className={`${transaction === 'incoming' ? 'bg-[#C1BBEB] text-[--text-primary]' : 'bg-[#FB7D5B] text-gray-50'}  grid place-content-center w-[32px] h-[32px] rounded-full ] flex-none overflow-hidden`}>
        {icon}
      </div>
      <p className="text-sm font-semibold text-[--text-primary] grow">{paymentMethod}</p>
      <p className="text-gray-500 text-sm">{amount}</p>
    </li>
  )
}
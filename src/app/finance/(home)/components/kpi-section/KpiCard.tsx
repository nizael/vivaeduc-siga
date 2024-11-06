import { ReactNode } from "react"

interface IKpiCardProps {
  title: string
  score: number
  amount: string
  icon: ReactNode
  color: 'blue' | 'yellow' | 'orange'
}

export const KpiCard = ({ score, title, amount, color, icon }: IKpiCardProps) => {

  const colors = {
    blue: 'bg-[--bg-primary]',
    yellow: 'bg-[#FCC43E]',
    orange: 'bg-[#FB7D5B]'

  }
  return (
    <div className="flex gap-4 items-center bg-gray-50 p-6  shadow-sm flex-none">
      <div className={`w-[40px] h-[40px] rounded-full  text-gray-50 grid place-content-center  ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-3xl text-[--text-primary] font-semibold">{amount}</p>
        <p className="text-sm text-gray-500"><b className="text-green-500">{score > 0 ? `+${score}` : score}%</b> que no mês passado</p>
      </div>
    </div>
  )
}
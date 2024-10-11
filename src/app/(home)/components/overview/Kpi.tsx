import { ReactNode } from "react"

export const Kpi = ({ bgColor, icon, label, value }: { value: string, label: string, icon: ReactNode, bgColor: 'blue' | 'orange' | 'yellow' }) => {
  const bgColors = {
    blue: 'bg-[--bg-primary]',
    orange: 'bg-[#FB7D5B]',
    yellow: 'bg-[#FCC43E]',
  }
  return (
    <div className="flex items-center gap-4">
      <div className={`w-[40px] h-[40px] grid place-content-center text-gray-50 rounded-full ${bgColors[bgColor]}`}>
        {icon}
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-2xl font-semibold text-[--text-primary]">{value}</p>
      </div>
    </div>
  )
}
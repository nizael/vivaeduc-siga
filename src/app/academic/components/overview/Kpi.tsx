import { ReactNode } from "react"

export const Kpi = ({ icon, label, value }: { value: string, label: string, icon: ReactNode }) => {

  return (
    <div className="flex  gap-4 ">
      <div className="rounded-full w-[80px] h-[80px] p-2 border-[4px] border-[#303972] grid place-content-center">
        <div className="w-[60px] h-[60px] grid place-content-center rounded-full text-[#4D44B5] bg-gray-50 shadow-lg">
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-xl text-slate-500">{label}</p>
        <p className="text-4xl font-semibold text-[#303972]">{value}</p>
      </div>
    </div>
  )
}
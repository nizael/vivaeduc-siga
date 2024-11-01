import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { Chart } from "./Chart"

export const BalanceAnalytics = () => {
  return (
    <section className="flex flex-col  bg-gray-50 shadow-sm p-6  w-full">
      <div className="text-primary font-semibold flex  justify-between">
        <p className="text-lg">Análise de saldo</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-slate-500 text-xs flex items-center gap-1">
              Esta semana
            </p>
            <p>1.245</p>
          </div>

          <button className="border border-[--bg-primary] text-primary rounded-full h-[40px] px-4 flex items-center gap-2">Janeiro <DropdownIcon /></button>
        </div>
      </div>
      <Chart />
    </section>
  )
}
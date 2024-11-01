import { FinanceIcon } from "@/components/icons/FinanceIcon"
import { Chart } from "./Chart"

export const Finance = () => {
  return (
    <section className="flex flex-col bg-gray-50 shadow-sm w-full">
      <div className="text-[--text-primary] font-semibold flex  justify-between rounded-t-xl p-4">
        <h5 className="text-[--text-primary] font-semibold flex items-center gap-2">
          <FinanceIcon />
          Finâncias
        </h5>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-slate-500 text-xs flex items-center gap-1">
              Esta semana
            </p>
            <p>R$ 1.245,00</p>
          </div>
        </div>
      </div>
      <Chart />
    </section>

  )
}
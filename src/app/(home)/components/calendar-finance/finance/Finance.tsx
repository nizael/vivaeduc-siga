import { FinanceIcon } from "@/components/icons/FinanceIcon"
import { Chart } from "./Chart"
import { reportPaymentRecordsForCurrentWeek } from "@/services/report/reportGet"

export const Finance = async () => {
  const { data } = await reportPaymentRecordsForCurrentWeek()
  console.log(data)
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
            <p>{data.total?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
      </div>
      <Chart dailySums={data.dailySums} />
    </section>

  )
}
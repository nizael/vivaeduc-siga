import { countEnrollmentReport } from "@/services/report/reportGet"
import { Chart } from "./Chart"

export const Performance = async () => {
  const { data } = await countEnrollmentReport()
  return (
    <section className="flex flex-col  bg-gray-50 shadow-sm">
      <div className="text-[--text-primary] font-semibold flex  justify-between rounded-t-xl p-4">
        <h5 className="text-[--text-primary] font-semibold flex items-center gap-2">Fluxo de matrículas</h5>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <p className="text-slate-500 text-xs ">Esta semana</p>
            <p>{data.thisWeek}</p>
          </div>
        </div>
      </div>
      <Chart monthlyReport ={data.monthlyReport}/>
    </section>
  )
}
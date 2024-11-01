import { Chart } from "./Chart"

export const Performance = () => {
  return (
    <section className="flex flex-col  bg-gray-50 shadow-sm">
      <div className="text-[--text-primary] font-semibold flex  justify-between rounded-t-xl p-4">
        <h5 className="text-[--text-primary] font-semibold flex items-center gap-2">Performance da escola</h5>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <p className="text-slate-500 text-xs ">Esta semana</p>
            <p>1.245</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-slate-500 text-xs ">Semana passada</p>
            <p>1.245</p>
          </div>
        </div>
      </div>
      <Chart />
    </section>
  )
}
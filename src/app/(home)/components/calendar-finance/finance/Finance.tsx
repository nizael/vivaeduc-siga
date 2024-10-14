import { Chart } from "./Chart"

export const Finance = () => {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-gray-50 shadow-sm p-6 w-full">
      <div className="text-[--text-primary] font-semibold flex  justify-between">
        <p className="text-lg">Finâncias</p>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <p className="text-slate-500 text-xs flex items-center gap-1">
              <span className="border-[3px] border-[#FCC43E] w-3 h-3 rounded-full" />
              Esta semana
            </p>
            <p>1.245</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-slate-500 text-xs flex items-center gap-1">
              <span className="border-[3px] border-[#FB7D5B] w-3 h-3 rounded-full" />
              Semana passada
            </p>
            <p>1.245</p>
          </div>
        </div>
      </div>
      <Chart />

    </section>

  )
}
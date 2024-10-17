import { EmptyResult } from "@/components/empyt-state/EmptyResult"

export const EmptyStateEmployee = () => {
  return (
    <div className="rounded-xl bg-gray-50 items-center h-full shadow-sm p-4 flex flex-col justify-center gap-4">
      <EmptyResult />
      <div>
        <h5 className="text-xl font-semibold text-[--text-primary]">Não existem funcionários cadastrados!</h5>
      </div>
    </div>
  )
}
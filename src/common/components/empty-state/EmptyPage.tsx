import { EmptyResult } from "./EmptyResult"

export const EmptyPage = ({ label }: { label: string }) => {
  return (
    <div className="rounded-xl bg-gray-50 items-center h-full shadow-sm p-4 flex flex-col justify-center gap-4">
      <EmptyResult />
      <div>
        <h5 className="text-xl font-semibold text-[--text-primary]">{label}</h5>
      </div>
    </div>
  )
}
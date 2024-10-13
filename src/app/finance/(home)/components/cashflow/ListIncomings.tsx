import { UptrendIcon } from "@/components/icons/UptrendIcon"
import { ListView } from "./ListView"
import { Pagination } from "./Pagination"

interface IListIncomingsProps {
  id: string
  value: string
  date: string
}
export const ListIncomings = ({ incomings }: { incomings: IListIncomingsProps[] }) => {
  return (
    <div className="flex flex-col gap-4  w-full shadow-sm rounded-xl bg-gray-50 p-6">
      <h3 className="text-lg text-[--text-primary] font-semibold">Entradas</h3>
      <div className="flex flex-col gap-4">
        {incomings.map(incoming => <ListView key={incoming.id} date={incoming.date} icon={<UptrendIcon />} value={incoming.value} transaction="incoming" id={incoming.id} />)}
      </div>
      <Pagination/>
    </div>
  )
}
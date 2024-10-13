import { UptrendIcon } from "@/components/icons/UptrendIcon"
import { ListView } from "./ListView"
import { Pagination } from "./Pagination"

interface IListIncomingsProps {
  id: string
  value: string
  date: string
}
export const ListOutgoings = ({ outgoings }: { outgoings: IListIncomingsProps[] }) => {
  return (
    <div className="flex flex-col gap-4  w-full shadow-sm rounded-xl bg-gray-50 p-6">
      <h3 className="text-lg text-[--text-primary] font-semibold">Entradas</h3>
      <div className="flex flex-col gap-4">
        {outgoings.map(outgoing => <ListView key={outgoing.id} date={outgoing.date} icon={<UptrendIcon />} value={outgoing.value} transaction="outgoing" id={outgoing.id} />)}
      </div>
      <Pagination />
    </div>
  )
}
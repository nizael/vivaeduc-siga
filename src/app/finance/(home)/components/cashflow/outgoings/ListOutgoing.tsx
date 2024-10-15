'use client'
import { UptrendIcon } from "@/components/icons/UptrendIcon"
import { ListView } from "../ListView"
import { Pagination } from "./Pagination"
import { useOutgoingStore } from "../../../stores/useOutgoingStore"
import { useEffect } from "react"
import { DowntrendIcon } from "@/components/icons/DowntrendIcon"

interface IListIncomingsProps {
  id: string
  value: string
  date: string
}
export const ListOutgoings = ({ outgoings }: { outgoings: IListIncomingsProps[] }) => {
  const { setListOutgoings, outgoingsViews, totalCashOutflow } = useOutgoingStore()

  useEffect(() => {
    if (outgoings) setListOutgoings(outgoings)
  }, [outgoings])

  return (
    <div className="flex flex-col gap-4  w-full shadow-sm rounded-xl bg-gray-50">
      <div className="flex justify-between p-4 rounded-t-xl">
        <h3 className="text-lg text-[--text-primary] font-semibold flex items-center gap-2">
          <DowntrendIcon />
          Saídas
        </h3>
        <div className="flex flex-col items-end gap-0.5">
          <p className="text-xs text-gray-500 font-semibold">Total das saídas de hoje</p>
          <p className="text-[--text-primary] font-semibold">{totalCashOutflow.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 grow p-4">
        {outgoingsViews?.map(outgoing => <ListView key={outgoing.id} date={outgoing.date} icon={<UptrendIcon />} value={outgoing.value} transaction="outgoing" id={outgoing.id} />)}
      </div>
      <Pagination />
    </div>
  )
}
'use client'
import { UptrendIcon } from "@/components/icons/UptrendIcon"
import { ListView } from "../ListView"
import { Pagination } from "./Pagination"
import { useOutgoingStore } from "../../../stores/useOutgoingStore"
import { useEffect } from "react"

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
    <div className="flex flex-col gap-4  w-full shadow-sm rounded-xl bg-gray-50 p-6">
      <div className="flex justify-between">
        <h3 className="text-lg text-[--text-primary] font-semibold">Saídas</h3>
        <div className="flex flex-col items-end">
          <p className="text-xs text-gray-500 font-semibold">Total das saídas de hoje</p>
          <p className="text-[--text-primary] font-semibold">{totalCashOutflow.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 grow">
        {outgoingsViews?.map(outgoing => <ListView key={outgoing.id} date={outgoing.date} icon={<UptrendIcon />} value={outgoing.value} transaction="outgoing" id={outgoing.id} />)}
      </div>
      <Pagination />
    </div>
  )
}
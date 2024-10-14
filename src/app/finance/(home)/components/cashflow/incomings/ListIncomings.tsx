'use client'
import { UptrendIcon } from "@/components/icons/UptrendIcon"
import { ListView } from "../ListView"
import { Pagination } from "./Pagination"
import { useIncomingStore } from "../../../stores/useIncomingStore"
import { useEffect } from "react"

interface IListIncomingsProps {
  id: string
  value: string
  date: string
}
export const ListIncomings = ({ incomings }: { incomings: IListIncomingsProps[] }) => {
  const { setListIncomings, incomingsViews, totalCashInflow } = useIncomingStore()

  useEffect(() => {
    if (incomings) setListIncomings(incomings)
  }, [incomings])

  return (
    <div className="flex flex-col gap-4  w-full shadow-sm rounded-xl bg-gray-50 p-6">
      <div className="flex justify-between">
        <h3 className="text-lg text-[--text-primary] font-semibold">Entradas</h3>
        <div className="flex flex-col items-end">
          <p className="text-xs text-gray-500 font-semibold">Total das entradas de hoje</p>
          <p className="text-[--text-primary] font-semibold">{totalCashInflow.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 grow">
        {incomingsViews?.map(incoming => <ListView key={incoming.id} date={incoming.date} icon={<UptrendIcon />} value={incoming.value} transaction="incoming" id={incoming.id} />)}
      </div>
      <Pagination />
    </div>
  )
}
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
    <div className="flex flex-col w-full shadow-sm rounded-xl bg-gray-50 ">
      <div className="flex justify-between p-4 rounded-t-xl">
        <h3 className="text-lg text-[--text-primary] font-semibold flex items-center gap-2">
          <UptrendIcon />
          Entradas
        </h3>
        <div className="flex flex-col items-end gap-0.5">
          <p className="text-xs text-gray-500 font-semibold">Total das entradas de hoje</p>
          <p className="text-[--text-primary] font-semibold">{totalCashInflow.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 grow  p-4">
        {incomingsViews?.map(incoming => <ListView key={incoming.id} date={incoming.date} icon={<UptrendIcon />} value={incoming.value} transaction="incoming" id={incoming.id} />)}
      </div>
      <Pagination />
    </div>
  )
}
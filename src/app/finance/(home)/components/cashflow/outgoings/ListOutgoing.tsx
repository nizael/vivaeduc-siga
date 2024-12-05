'use client'
import { UptrendIcon } from "@/components/icons/UptrendIcon"
import { ListView } from "../ListView"
import { useOutgoingStore } from "../../../../stores/useOutgoingStore"
import { useEffect } from "react"
import { DowntrendIcon } from "@/components/icons/DowntrendIcon"
import { Pagination } from "@/components/pagination/Pagination"
import { EmptyPage } from "@/components/empty-state/EmptyPage"
import { IIncomingsOrOutgoings } from "../../../../stores/useIncomingStore"

interface IListIncomingsProps {
  id: string
  value: string
  date: string
}
export const ListOutgoings = ({ outgoings }: { outgoings: IIncomingsOrOutgoings[] }) => {
  const { setListOutgoings, outgoingsViews, totalCashOutflow, listOutgoings, setCurrentPage, currentPage } = useOutgoingStore()

  useEffect(() => {
    if (outgoings) setListOutgoings(outgoings)
  }, [outgoings])

  return (
    <div className="flex flex-col w-full shadow-sm  bg-gray-50">
      <div className="flex justify-between p-4 ">
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
        {outgoingsViews?.length ? outgoingsViews?.map(outgoing => <ListView
          key={outgoing.id}
          paymentMethod={outgoing.paymentMethod}
          icon={<UptrendIcon />}
          amount={outgoing.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          transaction="outgoing" />) : <EmptyPage label="Sem transações de saída" />
        }
      </div>
      {listOutgoings && <Pagination currentPage={currentPage} items={listOutgoings} setCurrentPage={setCurrentPage} />}
    </div>
  )
}
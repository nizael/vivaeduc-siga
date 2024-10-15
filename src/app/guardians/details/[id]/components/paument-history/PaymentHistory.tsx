'use client'
import { ReportMoneyIcon } from "@/components/icons/ReportMoneyIcon"
import { Pagination } from "./Pagination"
import { IHistoryPayments, useHistoryPaymentStore } from "../../stores/useHistoryPaymentStore"
import { useEffect, useMemo } from "react"

export const PaymentHistory = ({ historyPayments }: { historyPayments: IHistoryPayments[] }) => {
  const { setListHistoryPayments, historyPaymentsViews } = useHistoryPaymentStore()
  useEffect(() => {
    if (historyPayments) setListHistoryPayments(historyPayments)
  }, [historyPayments])

  const { height } = useMemo(() => {
    console.log(historyPaymentsViews?.length)
    return {
      height: `${historyPayments.length > 6 ? 6*56 : historyPayments.length*56}px`
    }
  }, [historyPayments])

  return (
    <div className="flex flex-col gap-4 shadow-sm rounded-xl bg-gray-50">
      <div className="flex items-center gap-2 text-[--text-primary] rounded-t-xl p-4 border-b">
        <h5 className="text-[--text-primary] font-semibold flex items-center gap-2">
          <ReportMoneyIcon />
          Histórico de Pagamentos
        </h5>
      </div>
      <div style={{ minHeight: height }}>
        <table className="w-full">
          <tbody className="p-4">
            {historyPaymentsViews?.map(payment => <tr key={payment.id}>
              <td className="p-4 flex text-[--text-primary] font-semibold">
                {payment.code}
              </td>
              <td className="p-4 text-sm text-gray-500">{payment.date}</td>
              <td className="p-4 text-center text-[--text-primary] font-semibold">{payment.value}</td>
              <td className="p-4 text-end text-[--text-primary]">{payment.status}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  )
}

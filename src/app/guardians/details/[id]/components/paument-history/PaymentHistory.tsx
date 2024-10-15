import { ReportMoneyIcon } from "@/components/icons/ReportMoneyIcon"

const payments = [
  { code: '#1125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
]

export const PaymentHistory = () => {
  return (
    <div className="flex flex-col gap-4 shadow-sm rounded-xl bg-gray-50">
      <div className="flex text-[--text-primary] items-center rounded-t-xl bg-[--bg-tertiary] gap-2 px-4 py-2">
        <ReportMoneyIcon />
        <p className="font-semibold">Histórico de Pagamentos</p>
      </div>
      <table className="w-full">
        <tbody className="p-4">
          {payments.map(payment => <tr key={payment.code}>
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
  )
}

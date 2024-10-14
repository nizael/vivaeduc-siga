import { FinanceIcon } from "@/components/icons/FinanceIcon"

const payments = [
  { code: '#1125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
]

export const PaymentHistory = () => {
  return (
    <div className="flex flex-col gap-8 shadow-sm rounded-xl p-4 bg-gray-50">
      <div className="flex text-[--text-primary] items-center  gap-2 px-4">
        <FinanceIcon />
        <p className="text-xl font-semibold">Histórico de Pagamentos</p>
      </div>
      <table className="w-full">
        {/* <thead className="p-4">
          <tr className="text-xs font-semibold text-[--text-primary]">
            <td className="p-4 w-[100px]">Imagems</td>
            <td className="p-4">Nome</td>
            <td className="p-4 text-center">Parentesco</td>
            <td className="p-4 text-center">Situação</td>
            <td className="p-4 text-center w-[80px]">Ação</td>
          </tr>
        </thead> */}
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

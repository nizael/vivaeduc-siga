const payments = [
  { code: '#1125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
]

export const PaymentHistory = () => {
  return (
    <div className="flex flex-col gap-8 shadow-sm rounded-xl p-4 bg-gray-50">
      <p className="text-xl font-semibold text-[#303972] px-4">Histórico de Pagamentos</p>
      <table className="w-full">
        {/* <thead className="p-4">
          <tr className="text-xs font-semibold text-[#303972]">
            <td className="p-4 w-[100px]">Imagems</td>
            <td className="p-4">Nome</td>
            <td className="p-4 text-center">Parentesco</td>
            <td className="p-4 text-center">Situação</td>
            <td className="p-4 text-center w-[80px]">Ação</td>
          </tr>
        </thead> */}
        <tbody className="p-4">
          {payments.map(payment => <tr key={payment.code}>
            <td className="p-4 flex text-[#303972] font-semibold">
              { payment.code}
            </td>
            <td className="p-4 text-sm text-gray-500">{payment.date}</td>
            <td className="p-4 text-center text-[#303972] font-semibold">{payment.value}</td>
            <td className="p-4 text-end text-[#303972]">{payment.status}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

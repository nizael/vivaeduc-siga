import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { CreditCardIcon } from "@/components/icons/CreditCardIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { FinanceIcon } from "@/components/icons/FinanceIcon"
import { InputText } from "@/components/inputs/InputText"


export const PaymentPlan = () => {
  return (
    <details open className="bg-gray-50 rounded-lg flex flex-col gap-4 shadow-sm ">
      <summary className="p-4 grid grid-cols-3 border-b place-items-center text-gray-500"><span className="text-[--text-primary] font-semibold text-start w-full flex items-center gap-2"><CreditCardIcon /> Plano de pagamento</span> <DotsIcon /> <span className="grid w-full place-content-end"><DropdownIcon /></span></summary>
      <div className="p-4 flex flex-col gap-4">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <td className="px-4">Plano</td>
              <td className="px-4">Parcelas</td>
              <td className="px-4">Valor</td>
              <td className="px-4">Método de pagamento</td>
            </tr>
          </thead>

          <tbody className="font-medium text-sm text-[--text-primary]">
            <tr className="border-b">
              <td className="p-4">
                <label htmlFor="plan_2" className="flex gap-1 text-sm font-semibold"  >
                  <input type="radio" name="paymentPlan" id="plan_2" />
                  Mensalidade Ensino Fundamental II
                </label>
              </td>
              <td className="p-4">12</td>
              <td className="p-4">R$ 5000</td>
              <td className="p-4">Boleto</td>
            </tr>
            <tr className="border-b">
              <td className="px-4">
                <label htmlFor="plan_1" className="flex gap-1 grow text-sm font-semibold">
                  <input type="radio" name="paymentPlan" id="plan_1" />
                  Mensalidade Ensino Fundamental II
                </label>
              </td>
              <td className="p-4">1</td>
              <td className="p-4">R$ 5000</td>
              <td className="p-4">Cartão de crédito</td>
            </tr>
          </tbody>
        </table>
        <div className="grid grid-cols-4 gap-4">
          <CustomSelect label="Vencimento da primeira parcela" options={[{ label: 'Hoje', value: 'now' }, { label: 'Amanhã', value: 'tomorrow' }]} />
          <CustomSelect label="Vencimento das demais" options={Array.from({ length: 31 }, (_, index) => ({ label: `Dia ${index + 1} de cada mês`, value: `${index + 1}` }))} />
        </div>
      </div>
    </details>
  )
}
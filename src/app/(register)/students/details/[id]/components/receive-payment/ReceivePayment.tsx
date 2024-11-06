'use client'
import { InputText } from "@/components/inputs/InputText"
import { ModalOverlay } from "@/components/modals/ModalOverlay"
import { useReceivePaymentModal } from "../../../../stores/useReceivePaymentModal"
import { FieldData } from "../field-data/FieldData"
import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { paymentCreate } from "@/services/payment/paymentCreate"
import { useRouter } from "next/navigation"
import { methodReceipt, methodReceiptOptions } from "@/configs/methodReceipt"
import { useState } from "react"
import { currencyFormat } from "@/utils/currencyFormat"

export const ReceivePayment = () => {
  const router = useRouter()
  const { isOpen, onClose, onOpen, monthlyFee } = useReceivePaymentModal()
  const total = monthlyFee?.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0'
  const discount = monthlyFee?.discountAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0'
  const toReceiveAmount = monthlyFee?.toReceiveAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0'
  const previousPayments = monthlyFee?.previousPayments.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || '0'
  const [amount, setAmount] = useState("0,00");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value 

    setAmount(currencyFormat(value));
  };
  return (
    <ModalOverlay isOpen={isOpen} onClose={() => ({})}>

      <div className="bg-gray-50 rounded-md shadow-sm flex flex-col max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <div className="flex justify-between p-4 border-b ">
          <h5 className="text-xl text-[--text-primary] font-semibold">Novo pagamento</h5>
          <button onClick={onClose} className="border text-[--text-primary] rounded-full h-[40px] w-[40px] grid place-content-center">x</button>
        </div>
        <form action={async formData => {
          if (monthlyFee) {
            const amount = Number(formData.get('amount'))
            formData.set('monthlyFeesId', `${monthlyFee.id}`)
            formData.set('origin', 'IN_PERSON')
            formData.set('type', `${amount < monthlyFee.toReceiveAmount ? "PARTIAL" : "TOTAL"}`)
          }
          const { status } = await paymentCreate(formData)
          if (status === 201) {
            useReceivePaymentModal.setState({ monthlyFee: undefined })
            onClose()
          }
        }} className="p-4 flex flex-col gap-4" >
          <div className="grid grid-cols-3 gap-8 w-full">
            <FieldData field="Valor do título" value={total} />
            <FieldData field="Desconto" value={discount} />
            <FieldData field="Outros pagamento" value={previousPayments} />
            <FieldData field="A receber" value={toReceiveAmount} />
            <div className="col-start-1 col-end-3">
              <CustomSelect required options={methodReceiptOptions} onChange={() => ({})} label="Método de pagamento" name="paymentMethod" />
            </div>
            <div className="col-start-1 col-end-3">
              <InputText onChange={handleChange} value={amount} required label="Valor Recebido" name="amount" />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <button type="button" onClick={onClose} className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
            <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Confirmar pagamento</button>
          </div>
        </form>
      </div>

    </ModalOverlay>
  )
}
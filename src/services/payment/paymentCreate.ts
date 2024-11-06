import { ICreatePayment } from "./ICreatePayment"
import { paymentApi } from "../../di/dependencyInjection"

export const paymentCreate = async (formData: FormData) => {
  const data: ICreatePayment = {
    amount: Number(formData.get('amount')?.toString().replace(',', '.') || 0),
    monthlyFeesId: formData.get('monthlyFeesId')?.toString(),
    origin: formData.get('origin')?.toString() as "IN_PERSON",
    otherFeesId: formData.get('otherFeesId')?.toString(),
    receiptUrl: formData.get('receiptUrl')?.toString(),
    reference: formData.get('reference')?.toString(),
    paymentMethod: formData.get('paymentMethod')?.toString() as 'CREDIT_CARD' | 'DEBIT_CARD' | 'TICKET' | 'MONEY' | 'PIX',
    type: formData.get('type')?.toString() as "TOTAL" | "PARTIAL",
  }

  return paymentApi.create(data)
}

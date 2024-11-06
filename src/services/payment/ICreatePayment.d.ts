export interface ICreatePayment {
  amount: number
  monthlyFeesId?: string
  origin: "IN_PERSON"
  otherFeesId?: string
  receiptUrl?: string
  reference?: string
  type: "TOTAL" | "PARTIAL"
  paymentMethod: 'CREDIT_CARD' | 'DEBIT_CARD' | 'TICKET' | 'MONEY' | 'PIX'
}
export interface ICreatePaymentPlan {
  name: string
  amount: number
  courseId: string
  schoolYearId: string
  dueDay: number
  installmentAmount: number
  description?: string
  methodReceipt: 'CREDIT_CARD' | 'DEBIT_CARD' | 'TICKET' | 'MONEY' | 'PIX'
}
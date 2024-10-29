export interface ICreatePaymentPlan {
  name: string
  value: number
  courseId: string
  schoolYearId: string
  dueDate?: string
  installmentAmount: number
  description?: string
  methodReceipt: 'CREDIT_CARD' | 'DEBIT_CARD' | 'TICKET' | 'MONEY' | 'PIX'
}
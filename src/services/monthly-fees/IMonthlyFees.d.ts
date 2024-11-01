export interface IMonthlyFees {
  number: number
  id: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  status: "PAID" | "PENDING"
  studentId: string
  amount: number
  dueDate: Date
  enrollmentId: string
  bankSlipId?: string
}
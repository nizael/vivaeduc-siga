import { create } from "zustand";

interface IUseMonthlyFeesStore {
  monthlyFees?: IMonthlyFees
  monthlyFeesView?: IMonthlyFee[]
  monthlyFeesCurrent?: IMonthlyFee[]
  currentPage: number
  sequence: 'asc' | 'desc',
  resetStore(): void
  toggleSequence(): void
  setMonthlyFeesCurrent(key: string): void
  setCurrentPage(currentPage: number): void
  setMonthlyFees(monthlyFees: IMonthlyFees): void
}

export interface IMonthlyFees {
  [key: string]: IMonthlyFee[]
}

export interface IMonthlyFee {
  id: string
  schoolYearName: string
  classroomName: string
  previousPayments: number
  dueDate: Date
  amount: number
  installmentNumber: number
  toReceiveAmount: number
  discountAmount: number
  status: 'PAID' | 'PENDING'
}

export const useMonthlyFeesStore = create<IUseMonthlyFeesStore>((set, get) => ({
  currentPage: 1,
  sequence: 'desc',
  setMonthlyFees: (monthlyFees) => set({
    monthlyFees: monthlyFees,
  }),
  setMonthlyFeesCurrent(key) {
    const monthlyFees = get().monthlyFees
    if (monthlyFees) {
      set({
        monthlyFeesCurrent: [...monthlyFees[key as keyof typeof monthlyFees]],
        monthlyFeesView: monthlyFees[key as keyof typeof monthlyFees].slice(0, 6)
      })
    }
  },
  setCurrentPage: (currentPage) => {
    const monthlyFees = get().monthlyFeesCurrent
    const start = (currentPage - 1) * 6
    const end = currentPage * 6
    set({
      currentPage,
      monthlyFeesView: monthlyFees?.slice(start, end)
    })
  },

  toggleSequence: () => {
    const monthlyFeesCurrent = get().monthlyFeesCurrent
    const sequence = get().sequence
    if (monthlyFeesCurrent) {
      set({
        monthlyFeesView: [...monthlyFeesCurrent]?.slice(0, 6),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },
  resetStore: () => {
    set({
      monthlyFees: undefined,
      monthlyFeesCurrent: undefined,
      monthlyFeesView: undefined,
      currentPage: 1,
      sequence: 'desc',
    })
  }
}))
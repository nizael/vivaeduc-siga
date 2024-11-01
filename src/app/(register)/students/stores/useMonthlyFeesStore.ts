import { create } from "zustand";

interface IUseMonthlyFeesStore {
  monthlyFees?: IMonthlyFees[]
  monthlyFeesView?: IMonthlyFees[]
  currentPage: number
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setCurrentPage(currentPage: number): void
  setMonthlyFees(monthlyFees: IMonthlyFees[]): void
}

export interface IMonthlyFees {
  id: string
  dueDate: string
  installment: string
  discountAmount: string
  schoolYearName: string
  classroomName: string
  status: string
  totalAmount: string
  delay: boolean
}

export const useMonthlyFeesStore = create<IUseMonthlyFeesStore>((set, get) => ({
  currentPage: 1,
  sequence: 'desc',
  setMonthlyFees: (monthlyFees) => set({
    monthlyFees: monthlyFees,
    monthlyFeesView: monthlyFees?.slice(0, 6)
  }),
  setCurrentPage: (currentPage) => {
    const monthlyFees = get().monthlyFees
    const start = (currentPage - 1) * 6
    const end = currentPage * 6
    set({
      currentPage,
      monthlyFeesView: monthlyFees?.slice(start, end)
    })
  },

  toggleSequence: () => {
    const monthlyFees = get().monthlyFees?.reverse()
    const sequence = get().sequence
    if (monthlyFees) {
      set({
        monthlyFees: [...monthlyFees],
        monthlyFeesView: [...monthlyFees]?.slice(0, 8),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },

}))
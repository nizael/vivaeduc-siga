import { create } from "zustand";

interface IUseHistoryPaymentStore {
  listHistoryPayments?: IHistoryPayments[]
  historyPaymentsViews?: IHistoryPayments[]
  currentPage: number
  setCurrentPage(currentPage: number): void
  setListHistoryPayments(listHistoryPayments: IHistoryPayments[]): void
}

export interface IHistoryPayments {
  id: string
  value: string
  date: string
  code: string
  status: string
}
export const useHistoryPaymentStore = create<IUseHistoryPaymentStore>((set, get) => ({
  currentPage: 1,
  setListHistoryPayments: (listHistoryPayments) => set({
    listHistoryPayments,
    historyPaymentsViews: listHistoryPayments?.slice(0, 6)
  }),
  setCurrentPage: (currentPage) => {
    const listHistoryPayments = get().listHistoryPayments
    const start = (currentPage - 1) * 6
    const end = currentPage * 6
    set({
      currentPage,
      historyPaymentsViews: listHistoryPayments?.slice(start, end)
    })
  }
}))
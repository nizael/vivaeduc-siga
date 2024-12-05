import { create } from "zustand";

interface IUseIncomingStore {
  listIncomings?: IIncomingsOrOutgoings[]
  incomingsViews?: IIncomingsOrOutgoings[]
  currentPage: number
  totalCashInflow: number
  setCurrentPage(currentPage: number): void
  setListIncomings(listIncomings: IIncomingsOrOutgoings[]): void
}

export interface IIncomingsOrOutgoings {
  id: string
  paymentMethod: string
  amount: number
  type: string
}
export const useIncomingStore = create<IUseIncomingStore>((set, get) => ({
  currentPage: 1,
  totalCashInflow: 0,
  setListIncomings: (listIncomings) => set({
    listIncomings,
    incomingsViews: listIncomings?.slice(0, 5)
  }),
  setCurrentPage: (currentPage) => {
    const listIncomings = get().listIncomings
    const start = (currentPage - 1) * 5
    const end = currentPage * 5
    set({
      currentPage,
      incomingsViews: listIncomings?.slice(start, end)
    })
  }
}))
import { create } from "zustand";

interface IUseIncomingStore {
  listIncomings?: IIncomings[]
  incomingsViews?: IIncomings[]
  currentPage: number
  totalCashInflow: number
  setCurrentPage(currentPage: number): void
  setListIncomings(listIncomings: IIncomings[]): void
}

interface IIncomings {
  id: string
  value: string
  date: string
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
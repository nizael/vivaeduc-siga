import { create } from "zustand";

interface IUseOutgoingStore {
  listOutgoings?: IOutgoings[]
  outgoingsViews?: IOutgoings[]
  currentPage: number
  totalCashOutflow: number
  setCurrentPage(currentPage: number): void
  setListOutgoings(listOutgoings: IOutgoings[]): void
}

interface IOutgoings {
  id: string
  value: string
  date: string
}

export const useOutgoingStore = create<IUseOutgoingStore>((set, get) => ({
  currentPage: 1,
  totalCashOutflow: 0,
  setListOutgoings: (listOutgoings) => set({
    listOutgoings,
    outgoingsViews: listOutgoings?.slice(0, 5)
  }),
  setCurrentPage: (currentPage) => {
    const listOutgoings = get().listOutgoings
    const start = (currentPage - 1) * 5
    const end = currentPage * 5
    set({
      currentPage,
      outgoingsViews: listOutgoings?.slice(start, end)
    })
  }
}))
import { create } from "zustand";
import { IIncomingsOrOutgoings } from "./useIncomingStore";

interface IUseOutgoingStore {
  listOutgoings?: IIncomingsOrOutgoings[]
  outgoingsViews?: IIncomingsOrOutgoings[]
  currentPage: number
  totalCashOutflow: number
  setCurrentPage(currentPage: number): void
  setListOutgoings(listOutgoings: IIncomingsOrOutgoings[]): void
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
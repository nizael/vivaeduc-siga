import { create } from "zustand";

interface IUseGuardianStore {
  listGuardians?: IGuardians[]
  guardiansView?: IGuardians[]
  currentPage: number
  pushGuardian(guardian: IGuardians): void
  setCurrentPage(currentPage: number): void
  setListGuardians(listGuardians: IGuardians[]): void
}

export interface IGuardians {
  id: string
  image?: string
  name: string
  contact: { email: string, phone: string }
  role: string
}
export const useGuardiansStore = create<IUseGuardianStore>((set, get) => ({
  currentPage: 1,
  setListGuardians: (listGuardians) => set({
    listGuardians,
    guardiansView: listGuardians?.slice(0, 10)
  }),
  setCurrentPage: (currentPage) => {
    const listGuardians = get().listGuardians
    const start = (currentPage - 1) * 10
    const end = currentPage * 10
    set({
      currentPage,
      guardiansView: listGuardians?.slice(start, end)
    })
  },
  pushGuardian: (guardian) => {
    const listGuardian = get().listGuardians
    if (listGuardian) {
      set({ listGuardians: [guardian, ...listGuardian] })
    } else {
      set({ listGuardians: [guardian] })
    }
  }
}))
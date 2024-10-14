import { create } from "zustand";

interface IUseGuardianStore {
  listGuardians?: IGuardians[]
  guardiansView?: IGuardians[]
  currentPage: number
  setCurrentPage(currentPage: number): void
  setListGuardians(listGuardians: IGuardians[]): void
}

export interface IGuardians {
  id: string
  image?: string
  name: string
  code: string
  contact: { email: string, phone: string }
  role: string
  classroom: string
}
export const useGuardiansStore = create<IUseGuardianStore>((set, get) => ({
  currentPage: 1,
  setListGuardians: (listGuardians) => set({
    listGuardians,
    guardiansView: listGuardians?.slice(0, 20)
  }),
  setCurrentPage: (currentPage) => {
    const listGuardians = get().listGuardians
    const start = (currentPage - 1) * 20
    const end = currentPage * 20
    set({
      currentPage,
      guardiansView: listGuardians?.slice(start, end)
    })
  }
}))
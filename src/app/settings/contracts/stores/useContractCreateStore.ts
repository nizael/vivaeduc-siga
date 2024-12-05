import { create } from "zustand";

interface IUseContractCreateStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useContractCreateStore = create<IUseContractCreateStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
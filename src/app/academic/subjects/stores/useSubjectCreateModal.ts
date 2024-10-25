import { create } from "zustand";

interface IUseSubjectCreateModalStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useSubjectCreateModalStore = create<IUseSubjectCreateModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
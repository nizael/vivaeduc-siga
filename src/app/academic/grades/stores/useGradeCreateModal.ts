import { create } from "zustand";

interface IUseGradeCreateModalStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useGradeCreateModalStore = create<IUseGradeCreateModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
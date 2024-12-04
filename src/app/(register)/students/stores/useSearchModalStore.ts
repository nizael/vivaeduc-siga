import { create } from "zustand";

interface IUseSearchModalStore {
  isOpen: boolean
  onOpen(): void
  onClose(): void
}
export const useSearchModalStore = create<IUseSearchModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true })
}))
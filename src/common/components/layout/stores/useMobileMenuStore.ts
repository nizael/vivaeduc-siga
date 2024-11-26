import { create } from "zustand";

interface IUseMobileMenuStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useMobileMenuStore = create<IUseMobileMenuStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}))
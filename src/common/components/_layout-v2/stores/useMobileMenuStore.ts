import { create } from "zustand";

interface IUseMobileMenuStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
  moduleSelect: 'ACADEMIC' | 'FINANCE' | 'ADMIN'
  setModuleSelect(moduleSelect: 'ACADEMIC' | 'FINANCE' | 'ADMIN'): void
}

export const useMobileMenuStore = create<IUseMobileMenuStore>((set) => ({
  isOpen: false,
  moduleSelect: 'ACADEMIC',
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  setModuleSelect: (moduleSelect) => set({ moduleSelect })
}))
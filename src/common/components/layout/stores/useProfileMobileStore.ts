import { create } from "zustand";

interface IUseProfileMobileStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useProfileMobileStore = create<IUseProfileMobileStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}))
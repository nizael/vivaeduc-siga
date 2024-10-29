import { create } from "zustand";

interface IUseEnrollmentRequirementModal {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useEnrollmentRequirementModal = create<IUseEnrollmentRequirementModal>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
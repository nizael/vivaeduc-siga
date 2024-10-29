import { create } from "zustand";

interface IUsePaymentPlanCreateModal {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const usePaymentPlanCreateModal = create<IUsePaymentPlanCreateModal>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
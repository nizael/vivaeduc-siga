import { create } from "zustand";
import { IMonthlyFee } from "./useMonthlyFeesStore";

interface IUseReceivePaymentModal {
  monthlyFee?: IMonthlyFee
  isOpen: boolean
  type?: 'TOTAL' | 'PARTIAL'
  paymentMethod: "CREDIT_CARD" | "DEBIT_CARD" | "TICKET" | "MONEY" | "PIX"
  origin: 'IN_PERSON'
  onClose(): void
  onOpen(): void
}

export const useReceivePaymentModal = create<IUseReceivePaymentModal>((set) => ({
  amount: 0,
  origin: 'IN_PERSON',
  paymentMethod: 'MONEY',
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
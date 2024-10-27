import { create } from "zustand";

interface IUseEnrollmentStore {
  step: string
  setStep(step: string): void
}

export const useEnrollmentStore = create<IUseEnrollmentStore>((set) => ({
  step: '1',
  setStep(step) {
    set({ step })
  },
}))
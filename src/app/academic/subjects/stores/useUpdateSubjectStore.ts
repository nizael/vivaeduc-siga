import { create } from "zustand";

interface IUseUpdateSubjectStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
  // ---
  subjectUpdateId?: string
  setSubjectUpdateId(subjectUpdateId: string): void
}

export const useUpdateSubjectStore = create<IUseUpdateSubjectStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
  //---
  setSubjectUpdateId: (subjectUpdateId) => set({ subjectUpdateId }),
}))
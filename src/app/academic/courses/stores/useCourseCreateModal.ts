import { create } from "zustand";

interface IUseSchoolYearCreateModalStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useCourseCreateModalStore = create<IUseSchoolYearCreateModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
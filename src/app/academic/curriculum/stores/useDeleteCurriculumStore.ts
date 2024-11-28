import { create } from "zustand"

interface IUseDeleteCurriculumStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}



export const useDeleteCurriculumStore = create<IUseDeleteCurriculumStore>((set) => ({
  isOpen: false,
  curriculums: [],
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
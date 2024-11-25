import { create } from "zustand"

interface IUseDeleteSubjectFromCurriculumStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}



export const useDeleteSubjectFromCurriculumStore = create<IUseDeleteSubjectFromCurriculumStore>((set) => ({
  isOpen: false,
  curriculums: [],
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
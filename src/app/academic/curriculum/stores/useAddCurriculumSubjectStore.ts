import { create } from "zustand"

interface IUseAddCurriculumSubjectStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}



export const useAddCurriculumSubjectStore = create<IUseAddCurriculumSubjectStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
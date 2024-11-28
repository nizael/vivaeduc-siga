import { create } from "zustand"

export interface ICurriculumUpdate {
  curriculumIndex: number
  subjectIndex: number
  curriculumId: string
  subjectsName: string
  curriculumSubjectId: string
  teacher: { id: string, name: string }
}
interface IUseUpdateCurriculum {
  isOpen: boolean
  onClose(): void
  onOpen(): void
  currentCurriculum?: ICurriculumUpdate
  setCurrentCurriculum(currentCurriculum: ICurriculumUpdate): void
}



export const useUpdateCurriculum = create<IUseUpdateCurriculum>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
  setCurrentCurriculum: (currentCurriculum) => set({ currentCurriculum })
}))
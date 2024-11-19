import { ICurriculum } from "@/services/curriculum/ICurriculum";
import { create } from "zustand";

interface IUseCurriculumStore {
  curriculums: ICurriculum[]
  isOpen: boolean
  onClose(): void
  onOpen(): void
  setCurriculums(curriculums: ICurriculum[]): void
  pushCurriculum(curriculums: ICurriculum): void
}



export const useCurriculumStore = create<IUseCurriculumStore>((set, get) => ({
  isOpen: false,
  curriculums: [],
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
  pushCurriculum: (curriculum) => {
    const currentCurriculums = get().curriculums
    set({ curriculums: [curriculum, ...currentCurriculums] })
  },
  setCurriculums: (curriculums) => set({ curriculums }),
}))
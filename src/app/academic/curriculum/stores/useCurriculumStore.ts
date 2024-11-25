import { ICurriculum } from "@/services/curriculum/ICurriculum";
import { create } from "zustand";

interface IUseCurriculumStore {
  curriculums: ICurriculum[];
  isModalOpen: boolean;
  deleteCurriculumSubject(curriculumIndex: number, curriculumSubjectId: string): void
  openModal(): void;
  closeModal(): void;
  setCurriculums(curriculums: ICurriculum[]): void;
  addCurriculum(curriculum: ICurriculum): void;
  updateTeacher(curriculumIndex: number, subjectIndex: number, teacher: { id: string; name: string }): void;
}

export const useCurriculumStore = create<IUseCurriculumStore>((set, get) => ({
  isModalOpen: false,
  curriculums: [],

  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  setCurriculums: (curriculums) => set({ curriculums }),

  addCurriculum: (curriculum) =>
    set((state) => ({ curriculums: [curriculum, ...state.curriculums] })),

  updateTeacher: (curriculumIndex, subjectIndex, teacher) => {
    set((state) => {
      const curriculum = state.curriculums[curriculumIndex];
      if (!curriculum || !curriculum.curriculumSubjects[subjectIndex]) return state;

      const updatedCurriculums = state.curriculums.map((curr, cIndex) =>
        cIndex === curriculumIndex
          ? {
            ...curr,
            curriculumSubjects: curr.curriculumSubjects.map((subject, sIndex) =>
              sIndex === subjectIndex
                ? { ...subject, employee: teacher }
                : subject
            ),
          }
          : curr
      );

      return { curriculums: updatedCurriculums };
    });
  },
  deleteCurriculumSubject: (curriculumIndex, curriculumSubjectId) => {
    set((state) => {
      const curriculum = state.curriculums[curriculumIndex]
      if (!curriculum) return state
      const updatedCurriculums = state.curriculums.map((curr, cIndex) =>
        cIndex === curriculumIndex
          ? {
            ...curr,
            curriculumSubjects: curr.curriculumSubjects.filter(cS=> cS.id !== curriculumSubjectId)
          }
          : curr
      );
      return { curriculums: updatedCurriculums };
    })
  },
}));

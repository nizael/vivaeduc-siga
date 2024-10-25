import { ICourse } from "@/services/course/ICourse";
import { IGrade } from "@/services/grade/IGrade";
import { create } from "zustand";

interface IUseGradeStore {
  grades?: IGrade[]
  gradeViews?: IGrade[]
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setGrades(grades: IGrade[]): void
  pushGrade(garde: IGrade): void
}

export const useGradeStore = create<IUseGradeStore>((set, get) => ({
  sequence: 'desc',
  setGrades: (grades) => {
    set({ grades: grades, gradeViews: grades.slice(0, 10) })
  },
  pushGrade: (grade) => {
    const currentGrades = get().grades
    const grades = currentGrades ? [grade, ...currentGrades] : [grade]
    set({ grades: grades, gradeViews: grades.slice(0, 10) })
  },
  toggleSequence: () => {
    const grades = get().grades?.reverse()
    const sequence = get().sequence
    if (grades) {
      set({
        grades: [...grades],
        gradeViews: [...grades].slice(0, 10),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },
}))
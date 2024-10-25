import { ICourse } from "@/services/course/ICourse";
import { IGrade } from "@/services/grade/IGrade";
import { ISubject } from "@/services/subject/ISubject";
import { create } from "zustand";

interface IUseSubjectStore {
  subjects?: ISubject[]
  subjectViews?: ISubject[]
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setSubjects(subjects: ISubject[]): void
  pushSubject(subject: ISubject): void
}

export const useSubjectStore = create<IUseSubjectStore>((set, get) => ({
  sequence: 'desc',
  setSubjects: (subjects) => {
    set({ subjects: subjects, subjectViews: subjects.slice(0, 10) })
  },
  pushSubject: (subject) => {
    const currentGrades = get().subjects
    const subjects = currentGrades ? [subject, ...currentGrades] : [subject]
    set({ subjects, subjectViews: subjects.slice(0, 10) })
  },
  toggleSequence: () => {
    const subjects = get().subjects?.reverse()
    const sequence = get().sequence
    if (subjects) {
      set({
        subjects: [...subjects],
        subjectViews: [...subjects].slice(0, 10),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },
}))
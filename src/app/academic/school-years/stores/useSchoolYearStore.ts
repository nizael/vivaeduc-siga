import { ISchoolYear } from "@/services/school-year/ISchoolYear";
import { create } from "zustand";

interface IUseSchoolYearStore {
  schoolYears?: ISchoolYear[]
  schoolYearsView?: ISchoolYear[]
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setSchoolYears(schoolYears: ISchoolYear[]): void
  pushSchoolYear(schoolYears: ISchoolYear): void
}

export const useSchoolYearStore = create<IUseSchoolYearStore>((set, get) => ({
  sequence: 'desc',
  setSchoolYears: (schoolYears: ISchoolYear[]) => {
    set({ schoolYears, schoolYearsView: schoolYears.slice(0, 10) })
  },
  pushSchoolYear: (schoolYear: ISchoolYear) => {
    const currentSchoolYears = get().schoolYears
    const schoolYears = currentSchoolYears ? [schoolYear, ...currentSchoolYears] : [schoolYear]
    set({ schoolYears, schoolYearsView: schoolYears.slice(0, 10) })
  },
  toggleSequence: () => {
    const schoolYears = get().schoolYears?.reverse()
    const sequence = get().sequence
    if (schoolYears) {
      set({
        schoolYears: [...schoolYears],
        schoolYearsView: [...schoolYears].slice(0, 10),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },
}))
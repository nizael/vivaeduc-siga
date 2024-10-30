import { IEnrollmentRequirement } from "@/services/enrollmentRequirement/IEnrollmentRequirement";
import { create } from "zustand";

interface IUseEnrollmentRequirementStore {
  enrollmentRequirements?: IEnrollmentRequirement[]
  enrollmentRequirementsView?: IEnrollmentRequirement[]
  currentPage: number
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setCurrentPage(currentPage: number): void
  pushEnrollmentRequirement(paymentPlan: IEnrollmentRequirement): void
  setListEnrollmentRequirements(listEnrollmentRequirements: IEnrollmentRequirement[]): void
}


export const useEnrollmentRequirementsStore = create<IUseEnrollmentRequirementStore>((set, get) => ({
  currentPage: 1,
  sequence: 'desc',
  setListEnrollmentRequirements: (listEnrollmentRequirements) => set({
    enrollmentRequirements: listEnrollmentRequirements,
    enrollmentRequirementsView: listEnrollmentRequirements?.slice(0, 10)
  }),
  setCurrentPage: (currentPage) => {
    const listEnrollmentRequirements = get().enrollmentRequirements
    const start = (currentPage - 1) * 10
    const end = currentPage * 10
    set({
      currentPage,
      enrollmentRequirementsView: listEnrollmentRequirements?.slice(start, end)
    })
  },

  toggleSequence: () => {
    const enrollmentRequirements = get().enrollmentRequirements?.reverse()
    const sequence = get().sequence
    if (enrollmentRequirements) {
      set({
        enrollmentRequirements: [...enrollmentRequirements],
        enrollmentRequirementsView: [...enrollmentRequirements]?.slice(0, 10),
        // subjectViews: [...subjects].slice(0, 10),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },

  pushEnrollmentRequirement: (paymentPlan) => {
    const currentEnrollmentRequirements = get().enrollmentRequirements
    const enrollmentRequirements = currentEnrollmentRequirements ? [paymentPlan, ...currentEnrollmentRequirements] : [paymentPlan]
    set({ enrollmentRequirements, enrollmentRequirementsView: enrollmentRequirements.slice(0, 10) })
  },
  // pushEmployee: (student) => {
  //   const listStudents = get().listStudents
  //   if (listStudents) {
  //     set({ listStudents: [student, ...listStudents] })
  //   } else {
  //     set({ listStudents: [student] })
  //   }
  // }
}))
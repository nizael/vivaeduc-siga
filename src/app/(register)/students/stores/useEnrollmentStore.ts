import { IEnrollmentRequirement } from "@/services/enrollmentRequirement/IEnrollmentRequirement";
import { IPaymentPlan } from "@/services/paymentPlan/IPaymentPlan";
import { create } from "zustand";

interface IUseEnrollmentStore {
  schoolYearId?: string
  courseId?: string
  gradeId?: string
  discountType?: 'VALUE' | 'PERCENTAGE'
  discountValue?: number
  paymentPlan?: IPaymentPlan
  enrollmentRequirements: IEnrollmentRequirement[]
  enrollmentRequirementChecklists: { status: "PENDING" | "DELIVERED", enrollmentRequirementId: string }[]
  setEnrollmentRequirements(enrollmentRequirements: IEnrollmentRequirement[]): void
  pushEnrollmentRequirementChecklists(enrollmentRequirementChecklists: { status: "PENDING" | "DELIVERED", enrollmentRequirementId: string }): void
  setPaymentPlan(paymentPlan: IPaymentPlan): void
  setSchoolYearId(schoolYearId: string): void
  setGradeId(gradeId: string): void
  setCourseId(courseId: string): void
  setDiscountType(discountType?: 'VALUE' | 'PERCENTAGE'): void
  setDiscountValue(discountValue: number): void

}

export const useEnrollmentStore = create<IUseEnrollmentStore>((set, get) => ({
  enrollmentRequirements: [],
  enrollmentRequirementChecklists: [],
  setSchoolYearId: (schoolYearId) => set({ schoolYearId }),
  setCourseId: (courseId) => set({ courseId }),
  setPaymentPlan: (paymentPlan) => set({ paymentPlan }),
  setDiscountType: (discountType) => set({ discountType }),
  setDiscountValue: (discountValue) => set({ discountValue }),
  setGradeId: (gradeId) => set({ gradeId }),
  setEnrollmentRequirements: (enrollmentRequirements) => set({ enrollmentRequirements: [...enrollmentRequirements] }),
  pushEnrollmentRequirementChecklists: (enrollmentRequirementChecklist) => {
    const currentEnrollmentRequirementChecklists = get().enrollmentRequirementChecklists
    const index = currentEnrollmentRequirementChecklists.findIndex(item => item.enrollmentRequirementId === enrollmentRequirementChecklist.enrollmentRequirementId)
    if (index>=0) {
      currentEnrollmentRequirementChecklists[index].status = enrollmentRequirementChecklist.status
      set({ enrollmentRequirementChecklists: [...currentEnrollmentRequirementChecklists] })
    } else {
      set({ enrollmentRequirementChecklists: [enrollmentRequirementChecklist, ...currentEnrollmentRequirementChecklists] })
    }
  }
}))
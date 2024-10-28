import { IPaymentPlan } from "@/services/paymentPlan/IPaymentPlan";
import { create } from "zustand";

interface IUseEnrollmentStore {
  schoolYearId?: string
  courseId?: string
  discountType?: 'VALUE' | 'PERCENTAGE'
  discountValue?: number
  paymentPlan?: IPaymentPlan
  setPaymentPlan(paymentPlan: IPaymentPlan): void
  setSchoolYearId(schoolYearId: string): void
  setCourseId(courseId: string): void
  setDiscountType(discountType?: 'VALUE' | 'PERCENTAGE'): void
  setDiscountValue(discountValue: number): void

}

export const useEnrollmentStore = create<IUseEnrollmentStore>((set) => ({
  setSchoolYearId: (schoolYearId) => set({ schoolYearId }),
  setCourseId: (courseId) => set({ courseId }),
  setPaymentPlan: (paymentPlan) => set({ paymentPlan }),
  setDiscountType: (discountType) => set({ discountType }),
  setDiscountValue: (discountValue) => set({ discountValue })
}))
import { IPaymentPlan } from "@/services/paymentPlan/IPaymentPlan";
import { create } from "zustand";

interface IUsePaymentPlanStore {
  paymentPlans?: IPaymentPlan[]
  paymentPlanViews?: IPaymentPlan[]
  currentPage: number
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setCurrentPage(currentPage: number): void
  setPaymentPlans(paymentPlans: IPaymentPlan[]): void
  pushPaymentPlan(paymentPlan: IPaymentPlan): void
}

export const usePaymentPlanStore = create<IUsePaymentPlanStore>((set, get) => ({
  currentPage: 1,
  sequence: 'desc',
  setPaymentPlans: (paymentPlans) => {
    set({ paymentPlans, paymentPlanViews: paymentPlans.slice(0, 10) })
  },
  pushPaymentPlan: (paymentPlan) => {
    const currentPaymentPlans = get().paymentPlans
    const paymentPlans = currentPaymentPlans ? [paymentPlan, ...currentPaymentPlans] : [paymentPlan]
    set({ paymentPlans, paymentPlanViews: paymentPlans.slice(0, 10) })
  },
  toggleSequence: () => {
    const paymentPlans = get().paymentPlans?.reverse()
    const sequence = get().sequence
    if (paymentPlans) {
      set({
        paymentPlans: [...paymentPlans],
        paymentPlanViews: [...paymentPlans].slice(0, 10),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },
  setCurrentPage: (currentPage) => {
    const paymentPlans = get().paymentPlans
    const start = (currentPage - 1) * 8
    const end = currentPage * 8
    set({
      currentPage,
      paymentPlanViews: paymentPlans?.slice(start, end)
    })
  },
}))
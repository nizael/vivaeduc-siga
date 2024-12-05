import { IEnrollmentRequirement } from "@/services/enrollmentRequirement/IEnrollmentRequirement";
import { create } from "zustand";

interface IUseContractStore {
  listContracts?: IEnrollmentRequirement[]
  contractsView?: IEnrollmentRequirement[]
  currentPage: number
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setCurrentPage(currentPage: number): void
  pushContract(contract: IEnrollmentRequirement): void
  setListContracts(listContracts: IEnrollmentRequirement[]): void
}


export const useContractStore = create<IUseContractStore>((set, get) => ({
  currentPage: 1,
  sequence: 'desc',
  setListContracts: (listEnrollmentRequirements) => set({
    listContracts: listEnrollmentRequirements,
    contractsView: listEnrollmentRequirements?.slice(0, 10)
  }),
  setCurrentPage: (currentPage) => {
    const listEnrollmentRequirements = get().listContracts
    const start = (currentPage - 1) * 10
    const end = currentPage * 10
    set({
      currentPage,
      contractsView: listEnrollmentRequirements?.slice(start, end)
    })
  },

  toggleSequence: () => set(state => {
    const contracts = state.listContracts?.reverse()
    const sequence = state.sequence
    if (!contracts) return state
    return {
      listContracts: [...contracts],
      contractsView: [...contracts]?.slice(0, 10),
      sequence: sequence === 'asc' ? 'desc' : 'asc'
    }
  }),
  pushContract: (paymentPlan) => set(state => {
    const currentContracts = state.listContracts
    const contracts = currentContracts ? [paymentPlan, ...currentContracts] : [paymentPlan]
    return { listContracts: contracts, contractsView: contracts.slice(0, 10) }
  }),
}))
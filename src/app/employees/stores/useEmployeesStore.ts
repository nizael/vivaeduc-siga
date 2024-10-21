import { create } from "zustand";

interface IUseEmployeeStore {
  listEmployees?: IEmployees[]
  employeesView?: IEmployees[]
  currentPage: number
  setCurrentPage(currentPage: number): void
  setListEmployees(listEmployees: IEmployees[]): void
}

export interface IEmployees {
  id: string
  image?: string
  name: string
  contact: { email: string, phone: string }
  role: string
}
export const useEmployeesStore = create<IUseEmployeeStore>((set, get) => ({
  currentPage: 1,
  setListEmployees: (listEmployees) => set({
    listEmployees,
    employeesView: listEmployees?.slice(0, 10)
  }),
  setCurrentPage: (currentPage) => {
    const listEmployees = get().listEmployees
    const start = (currentPage - 1) * 10
    const end = currentPage * 10
    set({
      currentPage,
      employeesView: listEmployees?.slice(start, end)
    })
  },

}))
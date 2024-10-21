import { create } from "zustand";

interface IUseStudentStore {
  listStudents?: IStudents[]
  studentsView?: IStudents[]
  currentPage: number
  // pushEmployee(student: IStudents): void
  setCurrentPage(currentPage: number): void
  setListStudents(listStudents: IStudents[]): void
}

export interface IStudents {
  id: string
  name: string
  code: string
  contact: { email: string, phone: string }
  grade: string
  classroom: string
}
export const useStudentsStore = create<IUseStudentStore>((set, get) => ({
  currentPage: 1,
  setListStudents: (listStudents) => set({
    listStudents,
    studentsView: listStudents?.slice(0, 8)
  }),
  setCurrentPage: (currentPage) => {
    const listStudents = get().listStudents
    const start = (currentPage - 1) * 8
    const end = currentPage * 8
    set({
      currentPage,
      studentsView: listStudents?.slice(start, end)
    })
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
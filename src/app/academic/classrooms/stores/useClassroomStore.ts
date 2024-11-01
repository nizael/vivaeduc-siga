import { IClassroom } from "@/services/classroom/IClassroom";
import { create } from "zustand";

interface IUseClassroomStore {
  classrooms?: IClassroom[]
  classroomViews?: IClassroom[]
  sequence: 'asc' | 'desc',
  currentPage: number
  setCurrentPage(currentPage: number): void
  toggleSequence(): void
  setClassrooms(classrooms: IClassroom[]): void
  pushClassroom(classroom: IClassroom): void
}

export const useClassroomStore = create<IUseClassroomStore>((set, get) => ({
  sequence: 'desc',
  currentPage: 1,
  setClassrooms: (classrooms) => {
    set({ classrooms: classrooms, classroomViews: classrooms.slice(0, 10) })
  },
  pushClassroom: (classroom) => {
    const currentClassrooms = get().classrooms
    const classrooms = currentClassrooms ? [classroom, ...currentClassrooms] : [classroom]
    set({ classrooms, classroomViews: classrooms.slice(0, 10) })
  },
  toggleSequence: () => {
    const classrooms = get().classrooms?.reverse()
    const sequence = get().sequence
    if (classrooms) {
      set({
        classrooms: [...classrooms],
        classroomViews: [...classrooms].slice(0, 10),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },
  setCurrentPage: (currentPage) => {
    const classrooms = get().classrooms
    const start = (currentPage - 1) * 8
    const end = currentPage * 8
    set({
      currentPage,
      classroomViews: classrooms?.slice(start, end)
    })
  }
}))
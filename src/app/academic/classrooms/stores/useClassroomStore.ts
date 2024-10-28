import { IClassroom } from "@/services/classroom/IClassroom";
import { create } from "zustand";

interface IUseClassroomStore {
  classrooms?: IClassroom[]
  classroomViews?: IClassroom[]
  sequence: 'asc' | 'desc',
  toggleSequence(): void
  setClassrooms(classrooms: IClassroom[]): void
  pushClassroom(classroom: IClassroom): void
}

export const useClassroomStore = create<IUseClassroomStore>((set, get) => ({
  sequence: 'desc',
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
}))
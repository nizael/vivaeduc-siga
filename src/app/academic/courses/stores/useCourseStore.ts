import { ICourse } from "@/services/course/ICourse";
import { create } from "zustand";

interface IUseCourseStore {
  courses?: ICourse[]
  courseViews?: ICourse[]
  sequence: 'asc' | 'desc',
  currentPage: number
  setCurrentPage(currentPage: number): void
  toggleSequence(): void
  setCourses(courses: ICourse[]): void
  pushCourse(courses: ICourse): void
}

export const useCourseStore = create<IUseCourseStore>((set, get) => ({
  sequence: 'desc',
  currentPage: 1,
  setCourses: (courses) => {
    set({ courses: courses, courseViews: courses.slice(0, 10) })
  },
  pushCourse: (course) => {
    const currentCourses = get().courses
    const courses = currentCourses ? [course, ...currentCourses] : [course]
    set({ courses: courses, courseViews: courses.slice(0, 10) })
  },
  toggleSequence: () => {
    const courses = get().courses?.reverse()
    const sequence = get().sequence
    if (courses) {
      set({
        courses: [...courses],
        courseViews: [...courses].slice(0, 10),
        sequence: sequence === 'asc' ? 'desc' : 'asc'
      })
    }
  },
  setCurrentPage: (currentPage) => {
    const courses = get().courses
    const start = (currentPage - 1) * 8
    const end = currentPage * 8
    set({
      currentPage,
      courseViews: courses?.slice(start, end)
    })
  }
}))
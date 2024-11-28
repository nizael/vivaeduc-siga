import { ICurriculum } from "@/services/curriculum/ICurriculum";
import { IEmployee } from "@/services/employee/IEmployee";
import { IGrade } from "@/services/grade/IGrade";
import { ISchoolYear } from "@/services/school-year/ISchoolYear";
import { ISubject } from "@/services/subject/ISubject";
import { IPersonalData } from "@/types/personal/IPersonalData";
import { create } from "zustand";

interface ICurriculumDependenciesResponse {
  employees: (IEmployee & { person: IPersonalData })[]
  grades: IGrade[]
  subjects: ISubject[]
  schoolYears: ISchoolYear[]
}
interface IUseCurriculumStore {
  curriculums: ICurriculum[];
  isModalOpen: boolean;
  listTeachers?: { id: string, name: string }[]
  listSubjects?: { id: string, name: string }[]
  listGrades?: { id: string, name: string }[]
  listSchoolYears?: { id: string, name: string }[]
  setCurriculumDependencies(dependencies: ICurriculumDependenciesResponse): void
  curriculumUpdateData?: Partial<ICurriculum>
  setCurriculumUpdate(curriculum: Partial<ICurriculum>): void
  deleteCurriculum(curriculumId: string): void
  deleteCurriculumSubject(curriculumIndex: number, curriculumSubjectId: string): void
  openModal(): void;
  closeModal(): void;
  setCurriculums(curriculums: ICurriculum[]): void;
  addCurriculum(curriculum: ICurriculum): void;
  updateTeacher(curriculumIndex: number, subjectIndex: number, teacher: { id: string; name: string }): void;
}

export const useCurriculumStore = create<IUseCurriculumStore>((set, get) => ({
  isModalOpen: false,
  curriculums: [],
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  setCurriculums: (curriculums) => set({ curriculums }),

  addCurriculum: (curriculum) =>
    set((state) => ({ curriculums: [curriculum, ...state.curriculums] })),

  updateTeacher: (curriculumIndex, subjectIndex, teacher) => {
    set((state) => {
      const curriculum = state.curriculums[curriculumIndex];
      if (!curriculum || !curriculum.curriculumSubjects[subjectIndex]) return state;

      const updatedCurriculums = state.curriculums.map((curr, cIndex) =>
        cIndex === curriculumIndex
          ? {
            ...curr,
            curriculumSubjects: curr.curriculumSubjects.map((subject, sIndex) =>
              sIndex === subjectIndex
                ? { ...subject, employee: teacher }
                : subject
            ),
          }
          : curr
      );

      return { curriculums: updatedCurriculums };
    });
  },
  deleteCurriculumSubject: (curriculumIndex, curriculumSubjectId) => {
    set((state) => {
      const curriculum = state.curriculums[curriculumIndex]
      if (!curriculum) return state
      const updatedCurriculums = state.curriculums.map((curr, cIndex) =>
        cIndex === curriculumIndex
          ? {
            ...curr,
            curriculumSubjects: curr.curriculumSubjects.filter(cS => cS.id !== curriculumSubjectId)
          }
          : curr
      )
      return { curriculums: updatedCurriculums }
    })
  },

  setCurriculumUpdate: (curriculum) => {
    set({ curriculumUpdateData: curriculum })
  },

  deleteCurriculum: (id) => {
    set(state => {
      const curriculumFilter = state.curriculums.filter(crr => crr.id !== id)
      return { curriculums: curriculumFilter }
    })
  },

  setCurriculumDependencies: (dependencies) => {
    set({
      listTeachers: dependencies.employees.map(employee => ({ id: employee.id, name: employee.person.name })),
      listSubjects: dependencies.subjects.map(subject => ({ id: subject.id, name: subject.name })),
      listGrades: dependencies.grades.map(grade => ({ id: grade.id, name: grade.name })),
      listSchoolYears: dependencies.schoolYears.map(grade => ({ id: grade.id, name: grade.name }))
    })
  },
}));

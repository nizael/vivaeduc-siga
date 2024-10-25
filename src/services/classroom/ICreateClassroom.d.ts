export interface ICreateClassroom {
  name: string
  code: string
  gradeId: string
  courseId: string
  schoolYearId: string
  shift: "MORNING" | "AFTERNOON" | "NIGHT" | "INTERMEDIATE" | "FULL_TIME"
  numberVacancies: number
  inep?: string
  startDate: Date
  endDate: Date
  coordinatorId: string
}
export interface ICreateGrade {
  name: string
  code: string
  educacenso?: string
  typeAssessment: "REPORT" | "GRADE" | "GOAL"
  courseId: string
  isActive?: boolean
}
export interface ICreateEnrollmentRequirement {
  name: string
  isRequired: boolean
  courseId: string
  gradeId: string
  schoolYearId: string
  isActive?: boolean
}
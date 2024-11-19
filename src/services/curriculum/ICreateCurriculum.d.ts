export interface ICreateCurriculum {
  name: string
  schoolYearId: string
  gradeId: string
  curriculumSubjects: { subjectId: string, employeeId: string }[]
}
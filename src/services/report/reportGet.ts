'use server'
import { reportApi } from "../../di/dependencyInjection"

export const countStudentClassroomSubjectEventEmployee = async () => {
  return reportApi.countStudentClassroomSubjectEventEmployee()
}
export const countEnrollmentReport = async () => {
  return reportApi.countEnrollmentReport()
}

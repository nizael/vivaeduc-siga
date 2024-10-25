'use server'
import { reportApi } from "../../di/dependencyInjection"

export const countStudentClassroomSubject = async () => {
  return reportApi.countStudentClassroomSubject()
}

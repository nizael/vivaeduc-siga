'use server'
import { gradeApi } from "../../di/dependencyInjection"

export const gradeListAll = async () => {
  return gradeApi.listAll()
}

export const gradeGetByCourseId = async (courseId: string) => {
  return gradeApi.getByCourseId(courseId)
}
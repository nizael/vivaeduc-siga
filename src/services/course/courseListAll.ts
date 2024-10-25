'use server'
import { courseApi } from "../../di/dependencyInjection"

export const courseListAll = async () => {
  return courseApi.listAll()
}
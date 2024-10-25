'use server'
import { gradeApi } from "../../di/dependencyInjection"

export const gradeListAll = async () => {
  return gradeApi.listAll()
}
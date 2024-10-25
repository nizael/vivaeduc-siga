'use server'
import { subjectApi } from "../../di/dependencyInjection"

export const subjectListAll = async () => {
  return subjectApi.listAll()
}
'use server'
import { schoolYearApi } from "../../di/dependencyInjection"

export const schoolYearListAll = async () => {
  return schoolYearApi.listAll()
}
'use server'
import { paymentPlanApi } from "../../di/dependencyInjection"

export const paymentPlanListAll = async () => {
  return paymentPlanApi.listAll()
}

export const paymentPlanListByCourseIdSchoolYearId = async (schoolYearId: string, courseId: string) => {
  return paymentPlanApi.listByCourseIdSchoolYearId(schoolYearId, courseId)
}
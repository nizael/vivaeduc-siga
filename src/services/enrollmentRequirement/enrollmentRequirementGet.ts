'use server'

import { enrollmentRequirementApi } from "../../di/dependencyInjection"

export const enrollmentRequirementListAll = async () => {
  return enrollmentRequirementApi.listAll()
}

export const enrollmentRequirementListBySchoolYearIdGradeId = async (schoolYearId: string, gradeId: string) => {
  return enrollmentRequirementApi.listBySchoolYearIdGradeId(schoolYearId, gradeId)
}
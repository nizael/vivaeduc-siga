'use server'
import { classroomApi } from "../../di/dependencyInjection"

export const classroomListAll = async () => {
  return classroomApi.listAll()
}

export const classroomsListByGradeIdSchoolYearId = async (schoolYearId: string, gradeId: string) => {
  return classroomApi.listByGradeIdSchoolYearId(schoolYearId, gradeId)
}
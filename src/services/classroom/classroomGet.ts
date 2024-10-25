'use server'
import { classroomApi } from "../../di/dependencyInjection"

export const classroomListAll = async () => {
  return classroomApi.listAll()
}
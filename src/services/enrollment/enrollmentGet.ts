'use server'

import { enrollmentApi } from "../../di/dependencyInjection"

export const enrollmentListAll = async () => {
  return enrollmentApi.listAll()
}

export const enrollmentGetByStudentId = async (studentId: string) => {
  return enrollmentApi.getByStudentId(studentId)
}
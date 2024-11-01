'use server'

import {  monthlyFeesApi } from "../../di/dependencyInjection"

export const monthlyFeesListBayStudentId = async (studentId: string) => {
  return monthlyFeesApi.listBayStudentId(studentId)
}

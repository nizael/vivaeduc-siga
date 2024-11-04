'use server'
import { schoolApi } from "../../di/dependencyInjection"

export const schoolDetails = async () => {
  return schoolApi.details()
}
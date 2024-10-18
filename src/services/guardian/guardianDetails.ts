import {  guardianApi } from "../../di/dependencyInjection"

export const guardianDetails = async (id: string) => {
  return guardianApi.details(id)
}
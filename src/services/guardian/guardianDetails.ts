import { employeeApi } from "../../di/dependencyInjection"

export const guardianDetails = async (id: string) => {
  return employeeApi.details(id)
}
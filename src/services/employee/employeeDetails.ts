import { employeeApi } from "../../di/dependencyInjection"

export const employeeDetails = async (id: string) => {
  return employeeApi.details(id)
}
import { employeeApi } from "../../di/dependencyInjection"

export const guardianListAll = async () => {
  return employeeApi.listAll()
}
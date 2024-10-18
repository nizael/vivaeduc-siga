import { employeeApi, guardianApi } from "../../di/dependencyInjection"

export const guardianListAll = async () => {
  return guardianApi.listAll()
}
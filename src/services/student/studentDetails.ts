import { studentApi } from "../../di/dependencyInjection"

export const studentDetails = async (id: string) => {
  return studentApi.details(id)
}
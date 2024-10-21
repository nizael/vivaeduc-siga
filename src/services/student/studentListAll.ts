import { studentApi } from "../../di/dependencyInjection"

export const studentListAll = async () => {
  return studentApi.listAll()
}
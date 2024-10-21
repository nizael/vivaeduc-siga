'use server'
import { employeeApi } from "../../di/dependencyInjection"

export const employeeListAll = async () => {
  return employeeApi.listAll()
}
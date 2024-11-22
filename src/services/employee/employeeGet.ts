'use server'
import { employeeApi } from "../../di/dependencyInjection"

export const employeeListAll = async () => {
  return employeeApi.listAll()
}
export const listAllTeachers = async () => {
  return employeeApi.listAllTeachers()
}
export const employeeDetails = async (id: string) => {
  return employeeApi.details(id)
}

export const employeeGetByRole = async (employeeRole: string) => {
  return employeeApi.getByRole(employeeRole)
}


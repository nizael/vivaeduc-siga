'use server'
import { IAddress } from "@/types/address/IAddress"
import { IEmployeeInfo } from "../../app/employees/@types/IEmployeeInfo"
import { employeeApi } from "../../di/dependencyInjection"

export const employeeUpdate = async (data: Partial<IEmployeeInfo &{address: Partial<IAddress>}>, id: string) => {
  return employeeApi.update(data, id)
}
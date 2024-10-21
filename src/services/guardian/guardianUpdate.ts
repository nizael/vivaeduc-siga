'use server'
import { IAddress } from "@/types/address/IAddress"
import { IEmployeeInfo } from "../../app/employees/@types/IEmployeeInfo"
import { guardianApi } from "../../di/dependencyInjection"

export const guardianUpdate = async (data: Partial<IEmployeeInfo &{address: Partial<IAddress>}>, id: string) => {
  return guardianApi.update(data, id)
}
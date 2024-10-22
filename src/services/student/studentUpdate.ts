import { IAddress } from "@/types/address/IAddress"
import { IStudentInfo } from "../../app/students/@types/IStudentInfo"
import { studentApi } from "../../di/dependencyInjection"

export const studentUpdate = async (data: Partial<IStudentInfo & { address: Partial<IAddress> }>, id: string) => {
  return studentApi.update(data, id)
}
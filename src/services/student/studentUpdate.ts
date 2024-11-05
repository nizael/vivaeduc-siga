import { IAddress } from "@/types/address/IAddress"
import { IStudent } from "../../app/(register)/students/@types/IStudentInfo"
import { studentApi } from "../../di/dependencyInjection"

export const studentUpdate = async (data: Partial<IStudent & { address: Partial<IAddress> }>, id: string) => {
  return studentApi.update(data, id)
}
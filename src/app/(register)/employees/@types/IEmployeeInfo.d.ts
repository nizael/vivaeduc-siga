import { IPersonalData } from "@/types/personal/IPersonalData"

export interface IEmployeeInfo  extends IPersonalData {
  nickname: string
  role: string
}
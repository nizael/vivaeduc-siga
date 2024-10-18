import { IPersonalData } from "@/types/personal/IPersonalData"

export interface IStudentInfo  extends IPersonalData {
  code: string
  inep: string
}
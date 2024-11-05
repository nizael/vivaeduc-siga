import { IPersonalData } from "@/types/personal/IPersonalData"

export interface IStudent  extends IPersonalData {
  code: string
  inep: string
}
import { IPersonalData } from "@/types/personal/IPersonalData"

export interface IGuardianInfo extends IPersonalData {
  profession: string
  workplace: string
  workPhone: string
}
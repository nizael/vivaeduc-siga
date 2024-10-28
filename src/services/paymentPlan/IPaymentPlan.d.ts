import { IEmployees } from "../../app/(register)/employees/stores/useEmployeesStore"
import { ICourse } from "../course/ICourse"
import { IGrade } from "../grade/IGrade"
import { ISchoolYear } from "../school-year/ISchoolYear"
import { ICreateClassroom } from "./ICreateClassroom"
import { ICreatePaymentPlan } from "./ICreatePaymentPlan"

export interface IPaymentPlan extends ICreatePaymentPlan {
  id: string
  isActive: boolean
}
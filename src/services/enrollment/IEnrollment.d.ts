import { ICreateEnrollment } from "./ICreateEnrollment";

export interface IEnrollment extends ICreateEnrollment {
  schoolYear: ISchoolYear
  course: ICourse
  grade: IGrade
  discount: any
  monthlyFees: IMonthlyFees[]
  paymentPlan: IPaymentPlan
  classroom: IClassroom
  id: string
}
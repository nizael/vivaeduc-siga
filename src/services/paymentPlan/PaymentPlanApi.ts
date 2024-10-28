import { FetchApi } from "../fetch-api/FetchApi";
import { ICreatePaymentPlan } from "./ICreatePaymentPlan";


export class PaymentPlanApi extends FetchApi {
  async create(data: ICreatePaymentPlan) {
    return this.post('/v1/paymentPlans/create', data)
  }
  async listAll() {
    return this.get('/v1/paymentPlans/listAll')
  }

  async listByCourseIdSchoolYearId(schoolYearId: string, courseId: string) {
    return this.get(`/v1/paymentPlans/listByCourseIdSchoolYearId?schoolYearId=${schoolYearId}&courseId=${courseId}`)
  }
}
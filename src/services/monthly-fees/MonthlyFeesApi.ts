import { FetchApi } from "../fetch-api/FetchApi";

export class MonthlyFeesApi extends FetchApi {
  async listBayStudentId(studentId: string) {
    return this.get(`/v1/monthlyFees/listByStudentId/${studentId}`)
  }
}
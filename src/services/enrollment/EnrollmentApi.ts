import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateEnrollment } from "./ICreateEnrollment";


export class EnrollmentApi extends FetchApi {
  async create(data: ICreateEnrollment) {
    return this.post('/v1/enrollments/create', data)
  }
  async listAll() {
    return this.get('/v1/enrollments/listAll')
  }
}
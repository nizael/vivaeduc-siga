import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateEmployee } from "./ICreateEmployee";

export class StudentApi extends FetchApi {
  async create(data: ICreateEmployee) {
    return this.post('/v1/students/create', data)
  }
  async listAll() {
    return this.get('/v1/students/listAll')
  }
  async details(id: string) {
    return this.get(`/v1/students/details/${id}`)
  }
}
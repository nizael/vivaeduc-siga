import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateEmployee } from "./ICreateEmployee";

export class EmployeeApi extends FetchApi {
  async create(data: ICreateEmployee) {
    return this.post('/v1/employees/create', data)
  }
  async listAll() {
    return this.get('/v1/employees/listAll')
  }
  async details(id: string) {
    return this.get(`/v1/employees/details/${id}`)

  }
}
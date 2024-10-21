import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateStudent } from "./ICreateStudent";

export class StudentApi extends FetchApi {
  async create(data: ICreateStudent) {
    return this.post('/v1/students/create', data)
  }
  async listAll() {
    return this.get('/v1/students/listAll')
  }
  async details(id: string) {
    return this.get(`/v1/students/details/${id}`)
  }
}
import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateGrade } from "./ICreateGrade";

export class GradeApi extends FetchApi {
  async create(data: ICreateGrade) {
    return this.post('/v1/grades/create', data)
  }
  async listAll() {
    return this.get('/v1/grades/listAll')
  }
  // async details(id: string) {
  //   return this.get(`/v1/grades/details/${id}`)
  // }
  // async update(data: Partial<ICreateGrade>, id: string) {
  //   return this.put(`/v1/grades/update/${id}`, data)
  // }
}
import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateSubject } from "./ICreateSubject";

export class SubjectApi extends FetchApi {
  async create(data: ICreateSubject) {
    return this.post('/v1/subjects/create', data)
  }
  async listAll() {
    return this.get('/v1/subjects/listAll')
  }
  // async details(id: string) {
  //   return this.get(`/v1/subjects/details/${id}`)
  // }
  // async update(data: Partial<ICreateSubject>, id: string) {
  //   return this.put(`/v1/subjects/update/${id}`, data)
  // }
}
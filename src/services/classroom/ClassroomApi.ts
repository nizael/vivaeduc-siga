import { FetchApi } from "../fetch-api/FetchApi";

import { ICreateClassroom } from "./ICreateClassroom";

export class ClassroomApi extends FetchApi {
  async create(data: ICreateClassroom) {
    return this.post('/v1/classrooms/create', data)
  }
  async listAll() {
    return this.get('/v1/classrooms/listAll')
  }
  // async details(id: string) {
  //   return this.get(`/v1/classrooms/details/${id}`)
  // }
  // async update(data: Partial<ICreateClassroom>, id: string) {
  //   return this.put(`/v1/classrooms/update/${id}`, data)
  // }
}
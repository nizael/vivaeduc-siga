import { FetchApi } from "../fetch-api/FetchApi";

import { ICreateCourse } from "./ICreateCourse";
export class CourseApi extends FetchApi {
  async create(data: ICreateCourse) {
    return this.post('/v1/courses/create', data)
  }
  async listAll() {
    return this.get('/v1/courses/listAll')
  }
  // async details(id: string) {
  //   return this.get(`/v1/courses/details/${id}`)
  // }
  // async update(data: Partial<ICreateCourse>, id: string) {
  //   return this.put(`/v1/courses/update/${id}`, data)
  // }
}
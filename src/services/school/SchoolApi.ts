import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateSchool } from "./ICreateSchool";

export class SchoolApi extends FetchApi {
  // async create(data: ICreateSchool) {
  //   return this.post('/v1/schools/create', data)
  // }
  async details() {
    return this.get('/v1/schools/details')
  }
  // async details(id: string) {
  //   return this.get(`/v1/coursschoolYeares/details/${id}`)
  // }
  // async update(data: Partial<ICreateSchoolYear>, id: string) {
  //   return this.put(`/v1/schoolYear/update/${id}`, data)
  // }
}
import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateSchoolYear } from "./ICreateSchoolYear";

export class SchoolYearApi extends FetchApi {
  async create(data: ICreateSchoolYear) {
    return this.post('/v1/schoolYears/create', data)
  }
  async listAll() {
    return this.get('/v1/schoolYears/listAll')
  }
  // async details(id: string) {
  //   return this.get(`/v1/coursschoolYeares/details/${id}`)
  // }
  // async update(data: Partial<ICreateSchoolYear>, id: string) {
  //   return this.put(`/v1/schoolYear/update/${id}`, data)
  // }
}
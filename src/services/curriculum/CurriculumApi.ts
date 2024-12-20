import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateCurriculum } from "./ICreateCurriculum";
import { ICurriculum } from "./ICurriculum";

export class CurriculumApi extends FetchApi {
  async create(data: ICreateCurriculum) {
    return this.post('/v1/curriculums/create', data)
  }
  async curriculumDependencies() {
    return this.get('/v1/curriculums/curriculumDependencies')
  }

  async listAllCurriculums() {
    return this.get('/v1/curriculums/listAll')
  }

  async update(data: Partial<ICurriculum>, id: string) {
    return this.put(`/v1/curriculums/update/${id}`, data)
  }
}
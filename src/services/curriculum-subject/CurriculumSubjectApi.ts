import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateCurriculumSubject } from "./ICreateCurriculumSubject";

export class CurriculumSubjectApi extends FetchApi {
  async update(id: string, data: Partial<ICreateCurriculumSubject>) {
    return this.put(`/v1/curriculumSubjects/update/${id}`, data)
  }
}
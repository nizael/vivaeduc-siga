import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateEnrollmentRequirement } from "./ICreateEnrollmentRequirement";


export class EnrollmentRequirementApi extends FetchApi {
  async create(data: ICreateEnrollmentRequirement) {
    return this.post('/v1/enrollmentRequirements/create', data)
  }
  async listAll() {
    return this.get('/v1/enrollmentRequirements/listAll')
  }

  async listBySchoolYearIdGradeId(schoolYearId: string, gradeId: string) {
    return this.get(`/v1/enrollmentRequirements/listBySchoolYearIdGradeId?schoolYearId=${schoolYearId}&gradeId=${gradeId}`)
  }
}
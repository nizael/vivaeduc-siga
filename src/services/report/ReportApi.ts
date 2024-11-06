import { FetchApi } from "../fetch-api/FetchApi";

export class ReportApi extends FetchApi {

  async countStudentClassroomSubjectEventEmployee() {
    return this.get('/v1/reports/countStudentClassroomSubjectEventEmployee')
  }

  async countEnrollmentReport() {
    return this.get('/v1/reports/getEnrollmentReport')
  }

  async reportPaymentRecordsForCurrentWeek() {
    return this.get('/v1/reports/reportPaymentRecordsForCurrentWeek')
  }

  

  // async getByCourseId(courseId: string) {
  //   return this.get(`/v1/grades/getByCourseId/${courseId}`)
  // }
  // async details(id: string) {
  //   return this.get(`/v1/grades/details/${id}`)
  // }
  // async update(data: Partial<ICreateGrade>, id: string) {
  //   return this.put(`/v1/grades/update/${id}`, data)
  // }
}
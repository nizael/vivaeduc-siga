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

  async generalFinancialStudentEmployeeReport() {
    return this.get('/v1/reports/generalFinancialStudentEmployeeReport')
  }

  async reportPaymentRecordsForMonth(year: number, month: number) {
    return this.get(`/v1/reports/reportPaymentRecordsForMonth?year=${year}&month=${month}`)
  }

  async reportCurrentDayCashFlow(day?: number) {
    return this.get(`/v1/reports/currentDayCashFlow`)
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
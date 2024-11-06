'use server'
import { reportApi } from "../../di/dependencyInjection"

export const countStudentClassroomSubjectEventEmployee = async () => {
  return reportApi.countStudentClassroomSubjectEventEmployee()
}
export const countEnrollmentReport = async () => {
  return reportApi.countEnrollmentReport()
}

export const reportPaymentRecordsForCurrentWeek = async () => {
  return reportApi.reportPaymentRecordsForCurrentWeek()
}

export const generalFinancialStudentEmployeeReport = async () => {
  return reportApi.generalFinancialStudentEmployeeReport()
}

export const reportPaymentRecordsForMonth = async (year: number, month: number) => {
  return reportApi.reportPaymentRecordsForMonth(year, month)
}





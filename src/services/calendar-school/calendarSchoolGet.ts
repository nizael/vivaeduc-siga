'use server'
import { calendarSchoolApi, schoolYearApi } from "../../di/dependencyInjection"

export const listEvents = async () => {
  return calendarSchoolApi.listEvents()
}
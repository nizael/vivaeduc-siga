'use server'
import { calendarSchoolApi, schoolYearApi } from "../../di/dependencyInjection"

export const listEventsByDate = async (day: number, month: number, year: number) => {
  return calendarSchoolApi.listEventsByDate(day, month, year)
}


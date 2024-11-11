import { calendarSchoolApi } from "../../di/dependencyInjection"

export const createEvent = async (formData: FormData) => {
  const startDate = formData.get('startDate')!.toString()
  const endDate = formData.get('endDate')!.toString()
  const endTime = formData.get('endTime')!.toString()
  const startTime = formData.get('startTime')!.toString()

  const data = {
    eventName: formData.get('eventName')!.toString(),
    description: formData.get('description')!.toString(),
    eventType: formData.get('eventType')!.toString(),
    startDate: new Date(`${startDate},${startTime}`).toISOString(),
    endDate: new Date(`${endDate},${endTime}`).toISOString(),
  }
  return calendarSchoolApi.createEvent(data)
}
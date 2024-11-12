import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateEvent } from "./ICreateEvent";

export class CalendarSchoolApi extends FetchApi {
  async createEvent(data: ICreateEvent) {
    return this.post('/v1/calendarSchools/createEvent', data)
  }
  async listEventsByDate(day: number, month: number, year: number) {
    return this.get(`/v1/calendarSchools/listEventsByDate?day=${day}&month=${month}&year=${year}`)
  }
}
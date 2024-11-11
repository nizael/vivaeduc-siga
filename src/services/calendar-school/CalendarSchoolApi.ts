import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateEvent } from "./ICreateEvent";

export class CalendarSchoolApi extends FetchApi {
  async createEvent(data: ICreateEvent) {
    return this.post('/v1/calendarSchools/createEvent', data)
  }
  async listEvents() {
    return this.get('/v1/calendarSchools/listEvents')
  }
  // async details(id: string) {
  //   return this.get(`/v1/coursschoolYeares/details/${id}`)
  // }
  // async update(data: Partial<ICreateSchoolYear>, id: string) {
  //   return this.put(`/v1/schoolYear/update/${id}`, data)
  // }
}
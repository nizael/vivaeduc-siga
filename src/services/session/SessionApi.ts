import { FetchApi } from "../fetch-api/FetchApi";

export class SessionApi extends FetchApi {
  async create(data: { username: string, password: string }) {
  return this.post('/v1/sessions/create', data)
  }
}
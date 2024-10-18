import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateGuardian } from "./ICreateGuardian";

export class GuardianApi extends FetchApi {
  async create(data: ICreateGuardian) {
    return this.post('/v1/guardians/create', data)
  }
  async listAll() {
    return this.get('/v1/guardians/listAll')
  }
  async details(id: string) {
    return this.get(`/v1/guardians/details/${id}`)

  }
}
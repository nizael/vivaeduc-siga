import { FetchApi } from "../fetch-api/FetchApi";
import { ICreatePayment } from "./ICreatePayment";


export class PaymentApi extends FetchApi {
  async create(data: ICreatePayment) {
    return this.post('/v1/payments/create', data)
  }
  async listAll() {
    return this.get('/v1/payments/listAll')
  }

}
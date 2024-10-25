import { IAddress } from "@/types/address/IAddress";
import { IEmployeeInfo } from "../../app/(register)/employees/@types/IEmployeeInfo";
import { FetchApi } from "../fetch-api/FetchApi";
import { ICreateEmployee } from "./ICreateEmployee";

export class EmployeeApi extends FetchApi {
  async create(data: ICreateEmployee) {
    return this.post('/v1/employees/create', data)
  }
  async listAll() {
    return this.get('/v1/employees/listAll')
  }
  async details(id: string) {
    return this.get(`/v1/employees/details/${id}`)
  }
  async getByRole(employeeRole: string) {
    return this.get(`/v1/employees/getByRole/${employeeRole}`)
  }
  async update(data: Partial<IEmployeeInfo & { address: Partial<IAddress> }>, id: string) {
    return this.put(`/v1/employees/update/${id}`, data)
  }
}
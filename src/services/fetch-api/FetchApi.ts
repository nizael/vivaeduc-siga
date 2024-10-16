import { AxiosInstance, AxiosStatic } from "axios"
import { env } from "../../configs/env"
import { interceptorRequest } from "../../middlewares/interceptors/interceptorRequest"


export class FetchApi {
  protected fetch: AxiosInstance
  constructor(axios: AxiosStatic) {
    this.fetch = axios.create({
      baseURL: env.API_BASE_URL,
    })
  }
  

  protected async get(endpoint: string) {
    interceptorRequest(this.fetch)
    const response = await this.fetch.get(endpoint).then(response => ({ status: response.status, data: response.data })).catch((error) => {
      return {
        status: error.response?.status as number,
        data: error.response?.data
      }
    })
    return response
  }

  protected async post(endpoint: string, data: unknown) {
    interceptorRequest(this.fetch)
    console.log()
    const response = await this.fetch.post(endpoint, data).then(response => ({
      status: response?.status as number,
      data: response?.data
    })).catch(error => {
      return {
        status: error.response?.status as number,
        data: error.response?.data
      }
    })
    return response
  }

  protected async put(endpoint: string, data: unknown) {
    interceptorRequest(this.fetch)
    const response = await this.fetch.put(endpoint, data).then(response => ({
      status: response.status as number,
      data: response.data
    })).catch(error => {
      return {
        status: error.response.status,
        data: error.response.data
      }
    })
    return response
  }

  protected async delete(endpoint: string) {
    interceptorRequest(this.fetch)
    const response = await this.fetch.delete(endpoint).then(response => ({
      status: response.status as number,
      data: response.data
    })).catch(error => {
      return {
        status: error.response.status,
        data: error.response.data
      }
    })
    return response
  }
}

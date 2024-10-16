import { AxiosInstance } from "axios";
import { cookiesManager } from "../../di/dependencyInjection";

export async function interceptorRequest(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use(async (request) => {
    const cookie = await cookiesManager.getCookie('user_token');
    request.headers['Authorization'] = cookie ? `Bearer ${cookie.value}` : undefined;
    return request;
  });
}

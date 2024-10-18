import { FetchApi } from "../services/fetch-api/FetchApi";

import axios from "axios";
import { SessionApi } from "../services/session/SessionApi";
import { CookiesManager } from "@/utils/CookiesManager";
import { Guardian } from "../middlewares/Guardian";
import { EmployeeApi } from "../services/employee/EmployeeApi";
import { env } from "../configs/env";
import { GuardianApi } from "../services/guardian/GuardianApi";
// import { StudentApi } from "../services/register/student/StudentApi";
// import { GuardianApi } from "../services/register/guardian/GuardianApi";
// import { AddressApi } from "../services/register/address/AddressApi";

const fetchApi = new FetchApi(axios)
const sessionApi = new SessionApi(axios)
const employeeApi = new EmployeeApi(axios)
const guardianApi = new GuardianApi(axios)
// const studentApi = new StudentApi(axios)
// const guardianApi = new GuardianApi(axios)
// const addressApi = new AddressApi(axios)
const cookiesManager = new CookiesManager()
const guardian = new Guardian(env)


export {
  fetchApi,
  sessionApi,
  employeeApi,
  guardianApi,
  // studentApi,
  // guardianApi,
  // addressApi,
  cookiesManager,
  guardian,
}
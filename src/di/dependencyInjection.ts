import { FetchApi } from "@/services/fetch-api/FetchApi";

import axios from "axios";
import { SessionApi } from "@/services/session/SessionApi";
import { CookiesManager } from "@/utils/CookiesManager";
import { Guardian } from "../middlewares/Guardian";
import { EmployeeApi } from "@/services/employee/EmployeeApi";
import { env } from "../configs/env";
import { GuardianApi } from "@/services/guardian/GuardianApi";
import { StudentApi } from "@/services/student/StudentApi";
import { CourseApi } from "@/services/course/CourseApi";
import { SchoolYearApi } from "@/services/school-year/SchoolYearApi";
import { GradeApi } from "@/services/grade/GradeApi";
import { ClassroomApi } from "@/services/classroom/ClassroomApi";
import { SubjectApi } from "@/services/subject/SubjectApi";
// import { StudentApi } from "@/services/register/student/StudentApi";
// import { GuardianApi } from "@/services/register/guardian/GuardianApi";
// import { AddressApi } from "@/services/register/address/AddressApi";

const fetchApi = new FetchApi(axios)
const sessionApi = new SessionApi(axios)
const employeeApi = new EmployeeApi(axios)
const guardianApi = new GuardianApi(axios)
const studentApi = new StudentApi(axios)
const courseApi = new CourseApi(axios)
const cookiesManager = new CookiesManager()
const guardian = new Guardian(env)
const schoolYearApi = new SchoolYearApi(axios)
const gradeApi = new GradeApi(axios)
const classroomApi = new ClassroomApi(axios)
const subjectApi = new SubjectApi(axios)

export {
  fetchApi,
  subjectApi,
  classroomApi,
  sessionApi,
  employeeApi,
  guardianApi,
  studentApi,
  courseApi,
  cookiesManager,
  guardian,
  schoolYearApi,
  gradeApi,
}
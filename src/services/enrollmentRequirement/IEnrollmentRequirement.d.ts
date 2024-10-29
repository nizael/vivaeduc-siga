import { IEmployees } from "../../app/(register)/employees/stores/useEmployeesStore"
import { ICourse } from "../course/ICourse"
import { IGrade } from "../grade/IGrade"
import { ISchoolYear } from "../school-year/ISchoolYear"
import { ICreateClassroom } from "./ICreateClassroom"
import { ICreateEnrollmentRequirement } from "./ICreateEnrollmentRequirement"

export interface IEnrollmentRequirement extends ICreateEnrollmentRequirement {
  id: string
  courseName: string
  gradeName: string
  schoolYearName: string
}
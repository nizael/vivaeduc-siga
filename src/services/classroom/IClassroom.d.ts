import { IEmployees } from "../../app/(register)/employees/stores/useEmployeesStore"
import { ICourse } from "../course/ICourse"
import { IGrade } from "../grade/IGrade"
import { ISchoolYear } from "../school-year/ISchoolYear"
import { ICreateClassroom } from "./ICreateClassroom"

export interface IClassroom extends ICreateClassroom {
  id: string
  isActive: boolean
  schoolYear: ISchoolYear
  coordinator: IEmployees
  course: ICourse
  grade: IGrade
}
import { ICourse } from "../course/ICourse";
import { ICreateGrade } from "./ICreateGrade";

export interface IGrade extends ICreateGrade {
  id: string
  course: ICourse
}
import { ICreateCourse, ICreateSubject } from "./ICreateSubject"

export interface ISubject extends ICreateSubject {
  id: string
  isActive: boolean
}
import { subjectApi } from "../../di/dependencyInjection";
import { ISubject } from "./ISubject";

export const subjectUpdate = (data: Partial<ISubject>, subjectId: string) => {
  return subjectApi.update(data, subjectId)
}
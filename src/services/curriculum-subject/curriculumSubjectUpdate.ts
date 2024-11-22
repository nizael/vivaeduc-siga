import { curriculumSubjectApi } from "../../di/dependencyInjection";
import { ICreateCurriculumSubject } from "./ICreateCurriculumSubject";

export function curriculumSubjectUpdate(id: string, data: Partial<ICreateCurriculumSubject>) {
  return curriculumSubjectApi.update(id, data)
}
import { curriculumApi } from "../../di/dependencyInjection"
import { ICurriculum } from "./ICurriculum"

export const curriculumUpdate = async (data: Partial<ICurriculum>, id: string) => {
  return curriculumApi.update(data, id)
}
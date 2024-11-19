'use server'
import { curriculumApi } from "../../di/dependencyInjection"

export const curriculumDependencies = async () => {
  return curriculumApi.curriculumDependencies()
}

export const listAllCurriculums = async () => {
  return curriculumApi.listAllCurriculums()
}
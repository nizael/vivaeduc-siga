import { curriculumApi } from "../../di/dependencyInjection"

export const curriculumCreate = async (formData: FormData) => {
  const data = {
    name: formData.get('name')!.toString(),
    schoolYearId: formData.get('schoolYearId')!.toString(),
    gradeId: formData.get('gradeId')!.toString(),
    curriculumSubjects: JSON.parse(formData.get('curriculumSubjects')!.toString())
  }

  return curriculumApi.create(data)
}
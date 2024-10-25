import { courseApi, gradeApi, schoolYearApi } from "../../di/dependencyInjection"

export const gradeCreate = async (formData: FormData) => {
  const data = {
    name: formData.get('name')!.toString(),
    code: formData.get('code')!.toString(),
    educacenso: formData.get('educacenso')!.toString(),
    typeAssessment: formData.get('typeAssessment')!.toString() as "REPORT" | "GRADE" | "GOAL",
    courseId: formData.get('courseId')!.toString()
  }

  return gradeApi.create(data)
}
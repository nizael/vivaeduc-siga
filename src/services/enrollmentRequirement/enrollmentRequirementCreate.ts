import { courseApi, enrollmentRequirementApi, paymentPlanApi, schoolYearApi } from "../../di/dependencyInjection"

export const enrollmentRequirementCreate = async (formData: FormData) => {

  const data = {
    schoolYearId: formData.get('schoolYearId')!.toString(),
    courseId: formData.get('courseId')!.toString(),
    name: formData.get('name')!.toString(),
    gradeId:formData.get('gradeId')!.toString(),
    isRequired: Boolean(formData.get('isRequired')),
  }

  return enrollmentRequirementApi.create(data)
}
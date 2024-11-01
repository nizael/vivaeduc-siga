import { courseApi, enrollmentApi, enrollmentRequirementApi, paymentPlanApi, schoolYearApi } from "../../di/dependencyInjection"

export const enrollmentCreate = async (formData: FormData) => {
  const enrollmentRequirementChecklists = formData.get('enrollmentRequirementChecklists')!.toString()

  const discount = {
    name: formData.get('discountName')!.toString(),
    type: formData.get('type')!.toString(),
    value: Number(formData.get('value')),
    startDate: formData.get('startDate')?.toString(),
    endDate: formData.get('startDate')?.toString(),
  }

  const data = {
    courseId: formData.get('courseId')!.toString(),
    schoolYearId: formData.get('schoolYearId')!.toString(),
    status: formData.get('status')!.toString(),
    classroomId: formData.get('classroomId')!.toString(),
    gradeId: formData.get('gradeId')!.toString(),
    studentId: formData.get('studentId')!.toString(),
    paymentPlanId: formData.get('paymentPlanId')!.toString(),
    enrollmentRequirementChecklists: JSON.parse(enrollmentRequirementChecklists),
    discount: discount.name ? discount : undefined
  }
  return enrollmentApi.create(data)
}
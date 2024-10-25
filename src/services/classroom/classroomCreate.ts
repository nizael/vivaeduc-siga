import { classroomApi, courseApi, gradeApi, schoolYearApi } from "../../di/dependencyInjection"

export const classroomCreate = async (formData: FormData) => {
  const startDate = formData.get('startDate')!.toString()
  const endDate = formData.get('endDate')!.toString()
  
  const data = {
    name: formData.get('name')!.toString(),
    code: formData.get('code')!.toString(),
    gradeId: formData.get('gradeId')!.toString(),
    schoolYearId: formData.get('schoolYearId')!.toString(),
    numberVacancies: Number(formData.get('numberVacancies')!.toString()),
    inep: formData.get('inep')?.toString(),
    startDate: new Date(startDate).toISOString(),
    endDate: new Date(endDate).toISOString(),
    courseId: formData.get('courseId')!.toString(),
    coordinatorId: formData.get('coordinatorId')!.toString(),
    shift: formData.get('shift')!.toString() as "MORNING" | "AFTERNOON" | "NIGHT" | "INTERMEDIATE" | "FULL_TIME",
  }

  return classroomApi.create(data)
}
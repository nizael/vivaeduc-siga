import { schoolYearApi } from "../../di/dependencyInjection"

export const schoolYearCreate = async (formData: FormData) => {
  const yearCompletion = formData.get('yearCompletion')!.toString()
  const startDate = formData.get('startDate')!.toString()
  const endDate = formData.get('endDate')!.toString()

  const data = {
    name: formData.get('name')!.toString(),
    code: formData.get('code')!.toString(),
    startDate: new Date(startDate).toISOString(),
    endDate: new Date(endDate).toISOString(),
    yearCompletion: new Date(yearCompletion).toISOString(),
    schoolDays: Number(formData.get('schoolDays')!),
  }


  console.log(data)
  return schoolYearApi.create(data)
}
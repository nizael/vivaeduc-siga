import { courseApi, paymentPlanApi, schoolYearApi } from "../../di/dependencyInjection"

export const paymentPlanCreate = async (formData: FormData) => {
  const installmentAmount = formData.get('installmentAmount')
  const dueDate = formData.get('dueDate')

  const data = {
    schoolYearId: formData.get('schoolYearId')!.toString(),
    courseId: formData.get('courseId')!.toString(),
    name: formData.get('name')!.toString(),
    installmentAmount: Number(installmentAmount),
    ...(dueDate && { dueDate: dueDate.toString() }),
    value: Number(formData.get('value')!.toString()),
    methodReceipt: formData.get('methodReceipt')!.toString() as "CREDIT_CARD" | "DEBIT_CARD" | "TICKET" | "MONEY",
    description: formData.get('description')!.toString(),
  }

  return paymentPlanApi.create(data)
}
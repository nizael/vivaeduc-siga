import { paymentPlanApi } from "../../di/dependencyInjection"

export const paymentPlanCreate = async (formData: FormData) => {

  const data = {
    schoolYearId: formData.get('schoolYearId')!.toString(),
    courseId: formData.get('courseId')!.toString(),
    name: formData.get('name')!.toString(),
    installmentAmount: Number(formData.get('installmentAmount')),
    dueDay: Number(formData.get('dueDay')),
    amount: Number(formData.get('amount')),
    methodReceipt: formData.get('methodReceipt')!.toString() as "CREDIT_CARD" | "DEBIT_CARD" | "TICKET" | "MONEY",
    description: formData.get('description')!.toString(),
  }

  return paymentPlanApi.create(data)
}
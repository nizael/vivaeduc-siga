import { subjectApi } from "../../di/dependencyInjection"

export const subjectCreate = async (formData: FormData) => {
  const data = {
    name: formData.get('name')!.toString(),
    code: formData.get('code')!.toString(),
    educacenso: formData.get('educacenso')!.toString(),
    bncc: formData.get('bncc')!.toString() as "BNCC_LT" | "BNCC_MT" | "BNCC_CNT" | "BNCC_CHSA"
  }

  return subjectApi.create(data)
}
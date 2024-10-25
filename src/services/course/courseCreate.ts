import { courseApi, schoolYearApi } from "../../di/dependencyInjection"

export const courseCreate = async (formData: FormData) => {
  const data = {
    name: formData.get('name')!.toString(),
    code: formData.get('code')!.toString(),
    authorizationOrdinance: formData.get('authorizationOrdinance')!.toString(),
    modality: formData.get('modality')!.toString() as 'IN_PERSON' | 'HYBRID' | 'ONLINE'
  }

  return courseApi.create(data)
}
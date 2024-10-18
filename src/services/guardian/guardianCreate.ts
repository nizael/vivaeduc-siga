'use server'

import { guardianApi } from "../../di/dependencyInjection"

export const guardianCreate = async (formData: FormData) => {
  const guardianData = {
    name: formData.get('name')?.toString(),
    image: formData.get('image'),
    maritalStatus:formData.get('maritalStatus'),
    dateOfBirth: formData.get('dateOfBirth')?.toString(),
    gender: formData.get('gender')?.toString(),
    document: formData.get('document')?.toString(),
    identityCard: formData.get('identityCard')?.toString(),
    issuingAuthority: formData.get('issuingAuthority')?.toString(),
    issueDate: formData.get('issueDate')?.toString(),
    state: formData.get('issueState')?.toString(),
    email: formData.get('email')?.toString(),
    phone: formData.get('phone')?.toString(),
    colorOrRace: formData.get('colorOrRace')?.toString(),
    profession: formData.get('profession')?.toString(),
    workPhone:formData.get('workPhone')?.toString(),
    workplace:formData.get('workplace')?.toString(),
    security: {
      username: formData.get('username')?.toString(),
      password: formData.get('password')?.toString(),
    },
    address: {
      street: formData.get('street')?.toString(),
      number: formData.get('number')?.toString(),
      complement: formData.get('complement')?.toString(),
      neighborhood: formData.get('neighborhood')?.toString(),
      city: formData.get('city')?.toString(),
      state: formData.get('state')?.toString(),
      postalCode: formData.get('postalCode')?.toString(),
      country: 'Brasil',
    }
  }
  return guardianApi.create(guardianData)
}
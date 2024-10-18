'use server'
import { employeeApi } from "../../di/dependencyInjection"

export const employeeCreate = async (formData: FormData) => {
  const employeeData = {
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
    role: formData.get('role')?.toString(),
    nickname:formData.get('nickname')?.toString(),
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
  return employeeApi.create(employeeData)
}
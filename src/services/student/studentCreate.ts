'use server'
import { studentApi } from "../../di/dependencyInjection"

export const studentCreate = async (formData: FormData) => {
  const responsible = formData.get('responsible')?.toString()
  const kinship_2 = formData.get('kinship_2')?.toString()

  const studentGuardian = [{
    kinship: formData.get('kinship_1')?.toString(),
    isFinanciallyResponsible: true,
    guardianId: formData.get('financialResponsible')?.toString()
  },
  ...([(responsible && kinship_2) && {
    kinship: formData.get('kinship_2')?.toString(),
    isFinanciallyResponsible: false,
    guardianId: formData.get('responsible')?.toString()
  }])
  ]

  const username = formData.get('username')?.toString()
  const password = formData.get('password')?.toString()

  const employeeData = {
    name: formData.get('name')?.toString(),
    inep: formData.get('inep')?.toString(),
    image: formData.get('image'),
    maritalStatus: formData.get('maritalStatus'),
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
    nickname: formData.get('nickname')?.toString(),
    ...((username && password) && {
      security: {
        username: formData.get('username')?.toString(),
        password: formData.get('password')?.toString(),
      }
    }),
    studentGuardian,
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
  return studentApi.create(employeeData)
}
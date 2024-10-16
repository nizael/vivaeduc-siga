'use server'

import { sessionApi } from "../../di/dependencyInjection"

export const sessionCreate = async (formData: FormData) => {
  const password = formData.get('password')?.toString()
  const username = formData.get('username')?.toString()

  if (!password || !username) return {
    status: 400,
    data: {
      message: 'Username or password invalid'
    }
  }

  return sessionApi.create({ username, password })
}
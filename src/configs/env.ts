export interface IEnv {
  NODE_ENV: "development" | "production" | "test"
  API_BASE_URL?: string
  API_SECRET?: string
  JWT_SECRET?: string
  NEXT_PUBLIC_AUTH_BASE_URL?: string
}

export const env: IEnv = {
  NODE_ENV: process.env.NODE_ENV,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  NEXT_PUBLIC_AUTH_BASE_URL: process.env.NEXT_PUBLIC_AUTH_BASE_URL
}
import jwt, { JwtPayload } from 'jsonwebtoken'
import { IEnv } from '../configs/env'
import { cookiesManager } from '../di/dependencyInjection'
import { redirect } from 'next/navigation'

export type IPlans = 'BASIC' | 'PLUS' | 'PREMIUM' | 'MASTER'
export type IProfile = 'STAFF' | 'STUDENT' | 'GUARDIAN' | 'EMPLOYEE'
export interface DecodedToken extends JwtPayload {
  schoolId?: string
  profile: IProfile
  permissions: string[]
  plan: IPlans
  name: string
  role: string
}

export class Guardian {
  constructor(private env: IEnv) { }

  private async getToken() {
    const authUrl = this.env.NEXT_PUBLIC_AUTH_BASE_URL || '/error'

    if (!this.env.JWT_SECRET) {
      return redirect(authUrl)
    }
    const token = await cookiesManager.getCookie('user_token')
    if (!token) return redirect(authUrl)
    return token.value
  }

  private async decodedToken(token: string) {
    const authUrl = this.env.NEXT_PUBLIC_AUTH_BASE_URL || '/error'
    try {
      if (!this.env.JWT_SECRET) return redirect(authUrl)
      return jwt.verify(token, this.env.JWT_SECRET) as unknown as DecodedToken
    } catch {
      return redirect(authUrl)
    }
  }

  async authenticate() {
    const token = await this.getToken()
    const decoded = await this.decodedToken(token)
    return {
      schoolId: decoded.schoolId,
      profile: decoded.profile,
      permissions: decoded.permissions,
      plan: decoded.plan,
      name: decoded.name,
      role: decoded.role
    }
  }

  async checkPermission(permission: string) {
    const token = await this.getToken()
    const decoded = await this.decodedToken(token)
    return decoded.permissions.includes(permission)
  }
}

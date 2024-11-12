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
    if (!this.env.JWT_SECRET) {
      return redirect('http://localhost:3001')
    }
    const token = await cookiesManager.getCookie('user_token')
    if (!token) return redirect('http://localhost:3001')
    return token.value
  }

  private async decodedToken(token: string) {
    try {
      if (!this.env.JWT_SECRET) return redirect('http://localhost:3001')
      return jwt.verify(token, this.env.JWT_SECRET) as unknown as DecodedToken
    } catch {
      return redirect('http://localhost:3001')
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

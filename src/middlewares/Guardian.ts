import jwt, { JwtPayload } from 'jsonwebtoken'
import { env } from '../configs/env'
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
}

export class Guardian {
 async authenticate() {
    const JWT_SECRET = env.JWT_SECRET
    try {
      if (!JWT_SECRET) {
        return redirect('/session')
      }
      const token = await cookiesManager.getCookie('user_token')
      const tokenValue = token?.value.replace(/^Bearer\s/, '')

      if (!tokenValue) return redirect('/session')

      let decoded: DecodedToken
      try {
        decoded = jwt.verify(tokenValue, JWT_SECRET) as DecodedToken
      } catch {
        return redirect('/session')
      }
      console.log('name==>',decoded.name)
      return {
        schoolId: decoded.schoolId,
        profile: decoded.profile,
        permissions: decoded.permissions,
        plan: decoded.plan,
        name: decoded.name,
      }

    } catch {
      return redirect('/session')
    }

  }
}

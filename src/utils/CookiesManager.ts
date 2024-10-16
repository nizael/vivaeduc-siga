
export class CookiesManager {

  async getCookie(name: string): Promise<{ name: string, value: string } | null> {
    if (typeof document !== 'undefined') {
      const cookieArray = document.cookie.split('; ')
      const cookie = cookieArray.find(row => row.startsWith(`${name}=`))
      return cookie ? {
        name: cookie.split('=')[0],
        value: cookie.split('=')[1]
      } : null;
    } else {
      const { cookies } = await import('next/headers');
      const cookie = cookies().get(name)
      if (cookie) return cookie
      return null
    }
  }

  async setCookie(name: string, value: string, days?: number): Promise<void> {
    if (typeof document !== 'undefined') {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = `; expires=${date.toUTCString()}`
      }
      document.cookie = `${name}=${value || ''}${expires}; path=/`
    } else {
      const { cookies } = await import('next/headers')
      cookies().set(name, value)
    }
  }

}


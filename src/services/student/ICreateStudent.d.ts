export interface ICreateStudent {
  name?: string
  dateOfBirth?: string
  gender?: string
  document?: string
  identityCard?: string
  email?: string
  phone?: string
  colorOrRace?: string
  role?: string
  security?: {
    username?: string
    password?: string
  }
  address?: {
    street?: string
    number?: string
    complement?: string
    neighborhood?: string
    city?: string
    state?: string
    postalCode?: string
    country?: string
  }
}
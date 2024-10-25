export interface ICreateCourse {
  name: string
  code: string
  authorizationOrdinance?: string
  isActive?: boolean
  modality: 'IN_PERSON' | 'HYBRID' | 'ONLINE'
}
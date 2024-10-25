export interface ICreateSchoolYear {
  name: string
  code: string
  isActive?: boolean
  startDate: string
  endDate: string
  yearCompletion: string
  schoolDays?: number
}
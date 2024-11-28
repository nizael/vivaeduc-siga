export interface ICurriculum {
  id: string
  name: string
  isActive: boolean
  curriculumSubjects: ICurriculumSubjects[]
}

interface ICurriculumSubjects {
  id: string
  employee: { id: string, name: string }
  subject: { id: string, name: string }
}
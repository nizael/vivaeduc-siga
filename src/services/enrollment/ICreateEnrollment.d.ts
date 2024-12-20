export interface ICreateEnrollment {
  courseId: string;
  schoolYearId: string;
  isActive?: boolean;
  classroomId: string;
  status: string
  studentId: string;
  paymentPlanId: string;
  enrollmentRequirementChecklists?: {
    status: "PENDING" | "DELIVERED"
    enrollmentRequirementId: string
  }
  discount?: {
    name: string
    type: string
    amount: number
    startDate?: string
    endDate?: string
  }
}

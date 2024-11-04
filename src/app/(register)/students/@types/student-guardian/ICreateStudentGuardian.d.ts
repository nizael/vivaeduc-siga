
export interface ICreateStudentGuardian {
  kinship: $Enums.Kinship;
  isFinanciallyResponsible: boolean;
  studentId?: string;
  guardianId: string;
}
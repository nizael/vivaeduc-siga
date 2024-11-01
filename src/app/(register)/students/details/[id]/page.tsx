import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { StudentInfo } from "./components/student-info/StudentInfo";
import { StudentClassrooms } from "./components/classsroon/StudentCassroom";
import { StudentEvaluations } from "./components/evaluations/StudentEvaluations";
import { studentDetails } from "@/services/student/studentDetails";
import { IPageProps } from "@/types/page-props/IPageProps";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { enrollmentGetByStudentId } from "@/services/enrollment/enrollmentGet";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ListMonthlyFees } from "./components/monthlyFees/ListMonthlyFees";
import { monthlyFeesListBayStudentId } from "@/services/monthly-fees/enrollmentGet";

export default async function StudentDetailsPage(props: IPageProps) {
  const getDetails = studentDetails(props.params.id)
  const getEnrollment = enrollmentGetByStudentId(props.params.id)
  const getMonthlyFees = monthlyFeesListBayStudentId(props.params.id)
  const [details, enrollment, monthlyFees] = await Promise.all([getDetails, getEnrollment, getMonthlyFees])
  return (
    <LayoutWeb titlePage="Detalhes do Aluno">
      <div className="flex flex-col gap-4 grow">
        {details.status === 200 && details.data ? <StudentInfo studentData={details.data} /> : <EmptyPage label="Aluno não encontrado" />}
        {/* <StudentEvaluations /> */}
        {enrollment.status === 200 && details.data && enrollment.data && <StudentClassrooms enrollments={enrollment.data} />}
        {enrollment.status === 200 && <ListMonthlyFees enrollments={enrollment.data} />}

      </div>
    </LayoutWeb>
  )
}
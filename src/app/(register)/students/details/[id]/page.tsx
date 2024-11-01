import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { StudentInfo } from "./components/student-info/StudentInfo";
import { StudentClassrooms } from "./components/classsroon/StudentCassroom";
import { StudentEvaluations } from "./components/evaluations/StudentEvaluations";
import { studentDetails } from "@/services/student/studentDetails";
import { IPageProps } from "@/types/page-props/IPageProps";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { enrollmentGetByStudentId } from "@/services/enrollment/enrollmentGet";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function StudentDetailsPage(props: IPageProps) {
  const getDetails =  studentDetails(props.params.id)
  const getClassroom =  enrollmentGetByStudentId(props.params.id)
  const [details, classroom] = await Promise.all([getDetails, getClassroom])
  return (
    <LayoutWeb titlePage="Detalhes do Aluno">
      <div className="flex flex-col gap-4 grow">
        {details.status === 200 && details.data ? <StudentInfo studentData={details.data} /> : <EmptyPage label="Aluno não encontrado" />}
        {/* <StudentEvaluations /> */}
        {classroom.status === 200 && details.data && classroom.data && <StudentClassrooms enrollments={classroom.data} />}
      </div>
    </LayoutWeb>
  )
}
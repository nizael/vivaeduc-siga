import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { StudentInfo } from "./components/student-info/StudentInfo";
import { StudentClassrooms } from "./components/classsroon/StudentCassroom";
import { StudentEvaluations } from "./components/evaluations/StudentEvaluations";
import { studentDetails } from "@/services/student/studentDetails";
import { IPageProps } from "@/types/page-props/IPageProps";
import { EmptyPage } from "@/components/empty-state/EmptyPage";

export default async function StudentDetailsPage(props: IPageProps) {
  const { data, status } = await studentDetails(props.params.id)
  return (
    <LayoutWeb titlePage="Detalhes do Aluno">
      <div className="flex flex-col gap-4 grow">
        {status === 200 && data ?  <StudentInfo studentData={data}   /> : <EmptyPage label="Aluno não encontrado" />}
        <StudentEvaluations />
        <StudentClassrooms />
      </div>
    </LayoutWeb>
  )
}
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { StudentInfo } from "./components/student-info/StudentInfo";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { IPageProps } from "@/types/page-props/IPageProps";
import { studentDetails } from "@/services/student/studentDetails";


export default async function GuardianUpdatePage(props: IPageProps) {
  const { status, data } = await studentDetails(props.params.id)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4 grow">
        {status === 200 && data ? <StudentInfo studentData={data} /> : <EmptyPage label="Aluno não encontrado!" />}
        {/* <EmployeeClassrooms /> */}
      </div>
    </LayoutWeb>
  )
}
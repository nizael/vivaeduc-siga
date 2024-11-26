import { StudentInfo } from "./components/student-info/StudentInfo";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { IPageProps } from "@/types/page-props/IPageProps";
import { studentDetails } from "@/services/student/studentDetails";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";


export default async function GuardianUpdatePage(props: IPageProps) {
  const { status, data } = await studentDetails(props.params.id)
  return (
    <LayoutApp  >
      <div className="flex flex-col gap-4 p-4">
      <TitlePage title="Atualizar aluno" />
        {status === 200 && data ? <StudentInfo studentData={data} /> : <EmptyPage label="Aluno não encontrado!" />}
        {/* <EmployeeClassrooms /> */}
      </div>
    </LayoutApp >
  )
}
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { LayoutWeb } from "../../../common/components/_layout/LayoutWeb";
import { ListStudents } from "./components/list-students/ListStudets";
import { ToolBar } from "./components/ToolBar";
import { studentListAll } from "@/services/student/studentListAll";

export default async function StudentsPage() {
  const { data, status } = await studentListAll()
  return (
    <LayoutWeb titlePage="Alunos">
      <div className="flex flex-col gap-4 h-full">
        <ToolBar />
        {status === 200 && data ? <ListStudents students={data} /> : <EmptyPage label="Não existem alunos cadastrados!" />}
      </div>
    </LayoutWeb>
  );
}

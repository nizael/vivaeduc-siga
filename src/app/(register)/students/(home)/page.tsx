import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { LayoutWeb } from "../../../../common/components/_layout/LayoutWeb";
import { ListStudents } from "./components/list-students/ListStudets";
import { ToolBar } from "./components/ToolBar";
import { studentListAll } from "@/services/student/studentListAll";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default async function StudentsPage() {
  const { data, status } = await studentListAll()
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Alunos</h1>
        <ToolBar />
        {status === 200 && data.length ? <ListStudents students={data} /> : <EmptyPage label="Não existem alunos cadastrados!" />}
      </div>
    </LayoutApp>
  );
}

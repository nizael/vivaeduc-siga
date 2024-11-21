import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { ListStudents } from "./components/list-students/ListStudets";
import { ToolBar } from "./components/ToolBar";
import { studentListAll } from "@/services/student/studentListAll";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function StudentsPage() {
  const { data, status } = await studentListAll()
  return (
    <LayoutApp>
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4 min-h-full">
          <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Alunos</h1>
          <ToolBar />
          {status === 200 && data.length ? <ListStudents students={data} /> : <EmptyPage label="Não existem alunos cadastrados!" />}
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}

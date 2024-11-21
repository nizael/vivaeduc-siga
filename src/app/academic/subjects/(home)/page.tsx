import { ListGrades } from "./components/ListSubjects";
import { ToolBar } from "./components/ToolBar";
import { subjectListAll } from "@/services/subject/subjectListAll";
import { SubjectCreateModal } from "../create/CreateModal";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function SubjectPage() {
  const { data, status } = await subjectListAll()
  return (
    <>
      <SubjectCreateModal />
      <LayoutApp>
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <TitlePage title="Disciplinas" />
            <ToolBar />
            {(status === 200) && <ListGrades listSubjects={data} />}
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  );
}

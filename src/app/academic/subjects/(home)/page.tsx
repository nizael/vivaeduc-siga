import { ListGrades } from "./components/ListSubjects";
import { ToolBar } from "./components/ToolBar";
import { subjectListAll } from "@/services/subject/subjectListAll";
import { SubjectCreateModal } from "../create/CreateModal";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";

export default async function SubjectPage() {
  const { data, status } = await subjectListAll()
  return (
    <>
      <SubjectCreateModal />
      <LayoutApp>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Disciplinas" />
          <ToolBar />
          {(status === 200) && <ListGrades listSubjects={data} />}
        </div>
      </LayoutApp>
    </>
  );
}

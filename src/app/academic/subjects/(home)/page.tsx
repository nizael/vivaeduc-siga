import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListGrades } from "./components/ListSubjects";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { subjectListAll } from "@/services/subject/subjectListAll";
import { SubjectCreateModal } from "../create/CreateModal";

export default async function SubjectPage() {
  const { data, status } = await subjectListAll()
  return (
    <>
      <SubjectCreateModal />
      <LayoutWeb titlePage={<TitlePage />}>
        <div className="flex flex-col gap-4">
          <ToolBar />
          {(status === 200 && data) && <ListGrades subjects={data} />}
        </div>
      </LayoutWeb>
    </>
  );
}

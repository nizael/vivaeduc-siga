import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListGrades } from "./components/ListSubjects";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { subjectListAll } from "@/services/subject/subjectListAll";
import { SubjectCreateModal } from "../create/CreateModal";
import { EmptyPage } from "@/components/empty-state/EmptyPage";

export default async function SubjectPage() {
  const { data, status } = await subjectListAll()
  return (
    <>
      <SubjectCreateModal />
      <LayoutWeb titlePage={<TitlePage />}>
        <div className="flex flex-col gap-4 h-full">
          <ToolBar />
          {(status === 200) && <ListGrades subjects={data} /> }
        </div>
      </LayoutWeb>
    </>
  );
}

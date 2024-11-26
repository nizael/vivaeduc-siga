import { ListGrades } from "./components/ListSubjects";
import { ToolBar } from "./components/ToolBar";
import { subjectListAll } from "@/services/subject/subjectListAll";
import { CreateSubject } from "../create/CreateSubject";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { UpdateSubject } from "../update/UpdateSubject";

export default async function SubjectPage() {
  const { data, status } = await subjectListAll()
  return (
    <>
      <CreateSubject />
      <UpdateSubject />
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

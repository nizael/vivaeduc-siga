import { ListGrades } from "./components/ListGrades";
import { gradeListAll } from "@/services/grade/gradeGet";
import { GradeCreateModal } from "../create/CreateModal";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function GradePage() {
  const { data, status } = await gradeListAll()
  return (
    <>
      <GradeCreateModal />
      <LayoutApp >
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <TitlePage title="Séries" />
            <ToolBar />
            {(status === 200) && < ListGrades listGrades={data} />}
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  );
}

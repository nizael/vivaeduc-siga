import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListGrades } from "./components/ListGrades";
import { gradeListAll } from "@/services/grade/gradeGet";
import { GradeCreateModal } from "../create/CreateModal";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "@/components/templates/title-page/TitlePage";

export default async function GradePage() {
  const { data, status } = await gradeListAll()
  return (
    <>
      <GradeCreateModal />
      <LayoutApp >
      <div className="flex flex-col gap-4 p-4">
        <TitlePage title="Séries" />
          <ToolBar />
          {(status === 200) && < ListGrades grades={data} />}
        </div>
      </LayoutApp>
    </>
  );
}

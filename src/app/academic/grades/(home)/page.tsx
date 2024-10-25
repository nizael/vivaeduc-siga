// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListGrades } from "./components/ListGrades";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { gradeListAll } from "@/services/grade/gradeGet";
import { GradeCreateModal } from "../create/CreateModal";

export default async function GradePage() {
  const { data, status } = await gradeListAll()
  return (
    <>
      <GradeCreateModal />
      <LayoutWeb titlePage={<TitlePage />}>
        <div className="flex flex-col gap-4">
          <ToolBar />
          {(status === 200 && data) && < ListGrades grades={data} />}
        </div>
      </LayoutWeb>
    </>
  );
}

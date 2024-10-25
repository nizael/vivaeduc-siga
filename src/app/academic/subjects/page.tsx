// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListGrades } from "./components/ListSubjects";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { subjectListAll } from "@/services/subject/subjectListAll";

export default async function SubjectPage() {
  const { data, status } = await subjectListAll()
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4">
        <ToolBar />
        {(status === 200 && data) && <ListGrades subjects={data} />}
      </div>
    </LayoutWeb>
  );
}

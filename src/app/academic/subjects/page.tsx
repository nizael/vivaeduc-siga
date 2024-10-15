// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListGrades } from "./components/ListSubjects";
import { ToolBar } from "./components/ToolBar";

export default function SubjectPage() {
  return (
    <LayoutWeb titlePage="Disciplinas">
      <div className="flex flex-col gap-4">
        <ToolBar />
        <ListGrades />
      </div>
    </LayoutWeb>
  );
}

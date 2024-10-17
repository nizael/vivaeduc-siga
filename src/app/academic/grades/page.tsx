// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListGrades } from "./components/ListGrades";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";

export default function GradePage() {
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4">
        <ToolBar />
        <ListGrades />
      </div>
    </LayoutWeb>
  );
}

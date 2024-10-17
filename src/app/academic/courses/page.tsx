// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListCourses } from "./components/ListCourses";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";

export default function CoursePage() {
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4">
        <ToolBar />
        <ListCourses />
      </div>
    </LayoutWeb>
  );
}

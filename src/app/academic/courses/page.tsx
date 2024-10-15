// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListCourses } from "./components/ListCourses";
import { ToolBar } from "./components/ToolBar";

export default function CoursePage() {
  return (
    <LayoutWeb titlePage="Cursos">
      <div className="flex flex-col gap-4">
        <ToolBar />
        <ListCourses />
      </div>
    </LayoutWeb>
  );
}

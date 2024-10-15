// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListClassrooms } from "./components/ListClassrooms";
import { ToolBar } from "./components/ToolBar";

export default function ClassroomPage() {
  return (
    <LayoutWeb titlePage="Turmas">
      <div className="flex flex-col gap-4">
        <ToolBar />
        <ListClassrooms />
      </div>
    </LayoutWeb>
  );
}

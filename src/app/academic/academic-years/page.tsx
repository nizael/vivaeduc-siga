// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListAcademicYears } from "./components/ListAcademicYears";
import { ToolBar } from "./components/ToolBar";

export default function AcademicYearPage() {
  return (
    <LayoutWeb titlePage="Período Letivo">
      <div className="flex flex-col gap-4">
        <ToolBar />
        <ListAcademicYears />
      </div>
    </LayoutWeb>
  );
}

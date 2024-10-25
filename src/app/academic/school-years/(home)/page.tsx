// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListSchoolYears } from "./components/ListSchoolYears";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { schoolYearListAll } from "@/services/school-year/schoolYearListAll";
import { SchoolYearCreateModal } from "../create/CreateModal";

export default async function SchoolYearPage() {
  const { data, status } = await schoolYearListAll()
  return (
    <>
      <SchoolYearCreateModal />
      <LayoutWeb titlePage={<TitlePage />}>
        <div className="flex flex-col gap-4">
          <ToolBar />
          {(status === 200 && data) && <ListSchoolYears schoolYears={data} />}
        </div>
      </LayoutWeb >
    </>
  );
}

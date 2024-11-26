import { ListSchoolYears } from "./components/ListSchoolYears";
import { ToolBar } from "./components/ToolBar";
import { schoolYearListAll } from "@/services/school-year/schoolYearListAll";
import { SchoolYearCreateModal } from "../create/CreateModal";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function SchoolYearPage() {
  const { data, status } = await schoolYearListAll()
  return (
    <>
      <SchoolYearCreateModal />
      <LayoutApp>
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <TitlePage title="Período letivo" />
            <ToolBar />
            {(status === 200) && <ListSchoolYears listSchoolYears={data} />}
          </div>
        </LoadingSpinner>
      </LayoutApp >
    </>
  );
}

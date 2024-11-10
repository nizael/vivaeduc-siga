import { ListSchoolYears } from "./components/ListSchoolYears";
import { ToolBar } from "./components/ToolBar";
import { schoolYearListAll } from "@/services/school-year/schoolYearListAll";
import { SchoolYearCreateModal } from "../create/CreateModal";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";

export default async function SchoolYearPage() {
  const { data, status } = await schoolYearListAll()
  return (
    <>
      <SchoolYearCreateModal />
      <LayoutApp>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Período letivo" />
          <ToolBar />
          {(status === 200) && <ListSchoolYears listSchoolYears={data} />}
        </div>
      </LayoutApp >
    </>
  );
}

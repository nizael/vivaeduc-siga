import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { ListCurriculum } from "./components/ListCurriculum";
import { ToolBar } from "./components/ToolBar";
import { CreateCurriculum } from "../create/CreateCurriculum";
import { listAllCurriculums } from "@/services/curriculum/curriculumGets";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function CurriculumPage() {
  const { data, status } = await listAllCurriculums()
  return (
    <>
      <CreateCurriculum />
      <LayoutApp>
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <TitlePage title="Grades currículares" />
            <ToolBar />
            {(status === 200 && data.length) && <ListCurriculum listCurriculum={data} />}
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  )
}
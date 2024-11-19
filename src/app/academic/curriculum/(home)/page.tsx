import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { ListCurriculum } from "./components/ListCurriculum";
import { ToolBar } from "./components/ToolBar";
import { CreateCurriculum } from "../create/CreateCurriculum";
import { listAllCurriculums } from "@/services/curriculum/curriculumGets";
import { EmptyPage } from "@/components/empty-state/EmptyPage";

export default async function CurriculumPage() {
  const { data, status } = await listAllCurriculums()
  return (
    <>
      <CreateCurriculum />
      <LayoutApp>
        <div className="flex flex-col gap-4 p-4 min-h-full">
          <TitlePage title="Grades currículares" />
          <ToolBar />
          {(status === 200 && data) ? <ListCurriculum listCurriculum={data} />: <EmptyPage label="Nenhuma grade curricular encontrada"/>}
        </div>
      </LayoutApp>
    </>
  )
}
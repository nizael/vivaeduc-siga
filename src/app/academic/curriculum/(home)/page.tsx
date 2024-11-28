import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { ListCurriculum } from "./components/ListCurriculum";
import { ToolBar } from "./components/ToolBar";
import { CreateCurriculum } from "../create/CreateCurriculum";
import { listAllCurriculums } from "@/services/curriculum/curriculumGets";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { UpdateCurriculum } from "../update/UpdateCurriculum";
import { DeleteCurriculumSubject } from "../delete/DeleteCurriculumSubject";
import { DeleteCurriculum } from "../delete/DeleteCurriculum";
import { AddCurriculumSubject } from "../delete/AddCurriculumSubject";
import { ProviderDependencies } from "./components/ProviderDependencies";

export default async function CurriculumPage() {
  const { data, status } = await listAllCurriculums()
  return (
    <>
      <ProviderDependencies>
        <CreateCurriculum />
        <UpdateCurriculum />
        <DeleteCurriculumSubject />
        <DeleteCurriculum />
        <AddCurriculumSubject />
      </ProviderDependencies>
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
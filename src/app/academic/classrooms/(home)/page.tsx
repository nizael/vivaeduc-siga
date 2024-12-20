import { ListClassrooms } from "./components/ListClassrooms";
import { ToolBar } from "./components/ToolBar";
import { classroomListAll } from "@/services/classroom/classroomGet";
import { ClassroomCreateModal } from "../create/CreateModal";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function ClassroomPage() {
  const { data, status } = await classroomListAll()
  return (
    <>
      <ClassroomCreateModal />
      <LayoutApp>
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <TitlePage title="Turmas" />
            <ToolBar />
            {(status === 200) && <ListClassrooms listClassrooms={data} />}
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  )
}

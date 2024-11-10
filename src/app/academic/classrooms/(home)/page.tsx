import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListClassrooms } from "./components/ListClassrooms";
import { ToolBar } from "./components/ToolBar";
import { classroomListAll } from "@/services/classroom/classroomGet";
import { ClassroomCreateModal } from "../create/CreateModal";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default async function ClassroomPage() {
  const { data, status } = await classroomListAll()
  return (
    <>
      <ClassroomCreateModal />
      <LayoutApp>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Turmas" />
          <ToolBar />
          {(status === 200) && <ListClassrooms classrooms={data} />}
        </div>
      </LayoutApp>
    </>
  )
}

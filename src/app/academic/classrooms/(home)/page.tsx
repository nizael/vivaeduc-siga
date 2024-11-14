import { ListClassrooms } from "./components/ListClassrooms";
import { ToolBar } from "./components/ToolBar";
import { classroomListAll } from "@/services/classroom/classroomGet";
import { ClassroomCreateModal } from "../create/CreateModal";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default async function ClassroomPage() {
  const { data, status } = await classroomListAll()
  return (
    <>
      <ClassroomCreateModal />
      <LayoutApp>
        <div className="flex flex-col gap-4 p-4 min-h-full">
          <TitlePage title="Turmas" />
          <ToolBar />
          {(status === 200) && <ListClassrooms listClassrooms={data} />}
        </div>
      </LayoutApp>
    </>
  )
}

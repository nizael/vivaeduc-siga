// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListClassrooms } from "./components/ListClassrooms";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { classroomListAll } from "@/services/classroom/classroomGet";
import { ClassroomCreateModal } from "../create/CreateModal";

export default async function ClassroomPage() {
  const { data, status } = await classroomListAll()
  return (
    <>
      <ClassroomCreateModal />
      <LayoutWeb titlePage={<TitlePage />}>
        <div className="flex flex-col gap-4">
          <ToolBar />
          {(status === 200 && data) && <ListClassrooms classrooms={data} />}
        </div>
      </LayoutWeb>
    </>
  );
}

import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListCourses } from "./components/ListCourses";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { courseListAll } from "@/services/course/courseListAll";
import { CourseCreateModal } from "../create/CreateModal";
import { EmptyPage } from "@/components/empty-state/EmptyPage";

export default async function CoursePage() {
  const { data, status } = await courseListAll()
  return (
    <>
      <CourseCreateModal />
      <LayoutWeb titlePage={<TitlePage />}>
        <div className="flex flex-col gap-4 h-full">
          <ToolBar />
          {(status === 200) && <ListCourses courses={data} /> }
        </div>
      </LayoutWeb>
    </>
  );
}

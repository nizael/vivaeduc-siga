import { ListCourses } from "./components/ListCourses";
import { ToolBar } from "./components/ToolBar";

import { courseListAll } from "@/services/course/courseListAll";
import { CourseCreateModal } from "../create/CreateModal";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function CoursePage() {
  const { data, status } = await courseListAll()
  return (
    <>
      <CourseCreateModal />
      <LayoutApp>
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <TitlePage title="Cursos" />
            <ToolBar />
            {(status === 200) && <ListCourses listCourses={data} />}
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  );
}

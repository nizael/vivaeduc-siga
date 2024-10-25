import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListCourses } from "./components/ListCourses";
import { ToolBar } from "./components/ToolBar";
import { TitlePage } from "./components/TitlePage";
import { courseListAll } from "@/services/course/courseListAll";

export default async function CoursePage() {
  const { data, status } = await courseListAll()
  console.log(data)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4">
        <ToolBar />
        {(status === 200 && data) && <ListCourses courses={data} />}
      </div>
    </LayoutWeb>
  );
}

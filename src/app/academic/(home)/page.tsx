// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListClassrooms } from "./components/list-classroom/ListClassrooms";
import { ListSubjects } from "./components/list-subjects/ListSubjects";
import { NavBar } from "./components/nav-bar/NavBar";
import { Overview } from "./components/overview/Overview";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default function AcademicPage() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
      <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Acadêmico</h1>
        <Overview />
        <NavBar />
        <div className="grid grid-cols-2 gap-4">
          {/* <ListClassrooms /> */}
          {/* <ListAcademicYear /> */}
          
          {/* <ListSubjects /> */}
        </div>
      </div>
    </LayoutApp>
  );
}

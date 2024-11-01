// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListClassrooms } from "./components/list-classroom/ListClassrooms";
import { ListSubjects } from "./components/list-subjects/ListSubjects";
import { NavBar } from "./components/nav-bar/NavBar";
import { Overview } from "./components/overview/Overview";

export default function AcademicPage() {
  return (
    <LayoutWeb titlePage="Acadêmico">
      <div className="flex flex-col gap-4">
        <Overview />
        <NavBar />
        <div className="grid grid-cols-2 gap-4">
          {/* <ListClassrooms /> */}
          {/* <ListAcademicYear />
           */}
          {/* <ListSubjects /> */}
        </div>
      </div>
    </LayoutWeb>
  );
}

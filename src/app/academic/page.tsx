import { LayoutWeb } from "../../common/components/_layout/LayoutWeb";
// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { ListClassrooms } from "./components/list-classroom/ListClassrooms";
import { ListSubjects } from "./components/list-subjects/ListSubjects";
import { NavBar } from "./components/nav-bar/NavBar";
import { Overview } from "./components/overview/Overview";

export default function Academic() {
  return (
    <LayoutWeb titlePage="Acadêmico">
      <div className="flex flex-col gap-8">
        <Overview />
        <NavBar />
        <div className="grid grid-cols-2 gap-4">
          <ListClassrooms />
          {/* <ListAcademicYear />
           */}
          <ListSubjects />
        </div>
      </div>
    </LayoutWeb>
  );
}

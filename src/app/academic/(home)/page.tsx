// import { ListAcademicYear } from "./components/list-academic-year/ListAcademicYear";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { NavBar } from "./components/nav-bar/NavBar";
import { Overview } from "./components/overview/Overview";
import { LayoutApp } from "@/components/layout/LayoutApp";

export default function AcademicPage() {
  return (
    <LayoutApp>
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Pedagógico</h1>
          <Overview />
          <NavBar />
          <div className="grid grid-cols-2 gap-4">
            {/* <ListClassrooms /> */}
            {/* <ListAcademicYear /> */}

            {/* <ListSubjects /> */}
          </div>
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}

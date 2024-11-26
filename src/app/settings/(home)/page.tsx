import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { NavBar } from "./components/nav-bar/NavBar";
import { LayoutApp } from "@/components/layout/LayoutApp";


export default function SettingsPage() {
  return (
    <LayoutApp>
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Configurações</h1>
          <NavBar />
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}

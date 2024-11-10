import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { NavBar } from "./components/nav-bar/NavBar";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";


export default function SettingsPage() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Configurações</h1>
        <NavBar />
      </div>
    </LayoutApp>
  );
}

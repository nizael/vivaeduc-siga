import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { NavBar } from "./components/nav-bar/NavBar";


export default function SettingsPage() {
  return (
    <LayoutWeb titlePage="Configurações">
      <div className="flex flex-col gap-4">
        <NavBar />
      </div>
    </LayoutWeb>
  );
}

import { LayoutWeb } from "../../common/components/_layout/LayoutWeb";
import { ListGuardians } from "./components/list-guardians/ListGuardians";
import { ToolBar } from "./components/ToolBar";

export default function Guardians() {
  return (
    <LayoutWeb titlePage="Responsáveis">
      <div className="flex flex-col gap-8">
        <ToolBar />
        <ListGuardians />
      </div>
    </LayoutWeb>
  );
}

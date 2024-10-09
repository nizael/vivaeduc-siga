import { LayoutWeb } from "../../common/components/_layout/LayoutWeb";
import { ListEmployees } from "./components/list-employees/ListEmployees";
import { ToolBar } from "./components/ToolBar";

export default function Employees() {
  return (
    <LayoutWeb titlePage="Funcionários">
      <div className="flex flex-col gap-8">
        <ToolBar />
        <ListEmployees />
      </div>
    </LayoutWeb>
  );
}

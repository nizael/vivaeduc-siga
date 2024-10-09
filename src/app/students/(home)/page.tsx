import { LayoutWeb } from "../../../common/components/_layout/LayoutWeb";
import { ListStudents } from "./components/list-students/ListStudets";
import { ToolBar } from "./components/ToolBar";

export default function Students() {
  return (
    <LayoutWeb titlePage="Alunos">
      <div className="flex flex-col gap-8">
        <ToolBar />
        <ListStudents />
      </div>
    </LayoutWeb>
  );
}

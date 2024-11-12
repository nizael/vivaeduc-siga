import { ListEmployees } from "./components/list-employees/ListEmployees";
import { ToolBar } from "./components/ToolBar";
import { employeeListAll } from "@/services/employee/employeeGet";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default async function EmployeesPage() {
  const { status, data } = await employeeListAll()
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4 min-h-full">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Funcionários</h1>
        <ToolBar />
        {status === 200 && data.length ? <ListEmployees employees={data} /> : <EmptyPage label="Não existem funcionários cadastrados!" />}
      </div>
    </LayoutApp>
  );
}

import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { ListEmployees } from "./components/list-employees/ListEmployees";
import { ToolBar } from "./components/ToolBar";
import { employeeListAll } from "@/services/employee/employeeGet"; 
import { EmptyPage } from "@/components/empty-state/EmptyPage";

export default async function EmployeesPage() {
  const { status, data } = await employeeListAll()
  return (
    <LayoutWeb titlePage="Funcionários">
      <div className="flex flex-col gap-4 h-full">
        <ToolBar />
        {status === 200 && data ? <ListEmployees employees={data} /> : <EmptyPage label="Não existem funcionários cadastrados!" />}
      </div>
    </LayoutWeb>
  );
}

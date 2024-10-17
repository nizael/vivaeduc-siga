import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormEmployee } from "./components/FormEmployee";
// import { guardian } from "../../../di/dependencyInjection";
// import { redirect } from "next/navigation";


export default async function EmployeeCreatePage() {
  // const isPermission = await guardian.checkPermission('EMPLOYEE_DATABASE_WRITE')
  // if (!isPermission) return redirect('/')
  return (
    <LayoutWeb titlePage="Novo Funcionário">
      <div className="flex flex-col gap-4">
        <FormEmployee />
      </div>
    </LayoutWeb>
  );
}

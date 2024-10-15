import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
import { EmployeeClassrooms } from "./components/classsroon/EmployeeCassroom";

export default function EmployeeDetailsPage() {
  return (
    <LayoutWeb titlePage="Detalhes do Funcionário">
      <div className="flex flex-col gap-4 grow">
        <EmployeeInfo />
        <EmployeeClassrooms />
      </div>
    </LayoutWeb>
  )
}
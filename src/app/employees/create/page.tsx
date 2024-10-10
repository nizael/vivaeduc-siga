import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormEmployee } from "./components/FormEmployee";


export default function EmployeeCreate() {
  return (
    <LayoutWeb titlePage="Novo Funcionário">
      <div className="flex flex-col gap-8">
        <FormEmployee />
      </div>
    </LayoutWeb>
  );
}

import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormEmployee } from "./components/FormEmployee";


export default function EmployeeCreatePage() {
  return (
    <LayoutWeb titlePage="Novo Funcionário">
      <div className="flex flex-col gap-4">
        <FormEmployee />
      </div>
    </LayoutWeb>
  );
}

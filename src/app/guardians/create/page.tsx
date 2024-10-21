import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormGuardian } from "./components/FormGuardian";

export default async function EmployeeCreatePage() {
  return (
    <LayoutWeb titlePage="Novo Funcionário">
      <div className="flex flex-col gap-4">
        <FormGuardian />
      </div>
    </LayoutWeb>
  );
}

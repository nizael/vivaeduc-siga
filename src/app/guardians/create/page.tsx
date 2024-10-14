import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormGuardian } from "./components/FormGuardian";


export default function GuardianCreatePage() {
  return (
    <LayoutWeb titlePage="Novo Responsável">
      <div className="flex flex-col gap-4">
        <FormGuardian />
      </div>
    </LayoutWeb>
  );
}

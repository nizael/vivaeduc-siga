import { FormGuardian } from "./components/FormGuardian";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";

export default async function EmployeeCreatePage() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <TitlePage title="Novo Responsável" />
        <FormGuardian />
      </div>
    </LayoutApp>
  );
}

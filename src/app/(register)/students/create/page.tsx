import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormStudent } from "./components/FormStudent";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";


export default function StudentsCreatePage() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <TitlePage title="Novo Alunos" />
        <FormStudent />
      </div>
    </LayoutApp>
  );
}

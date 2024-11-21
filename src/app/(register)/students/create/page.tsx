import { FormStudent } from "./components/FormStudent";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";


export default function StudentsCreatePage() {
  return (
    <LayoutApp>
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <TitlePage title="Novo Alunos" />
          <FormStudent />
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}

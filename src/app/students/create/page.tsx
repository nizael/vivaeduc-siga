import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormStudent } from "./components/FormStudent";


export default function StudentsCreatePage() {
  return (
    <LayoutWeb titlePage="Novo Alunos">
      <div className="flex flex-col gap-4">
        <FormStudent />
      </div>
    </LayoutWeb>
  );
}

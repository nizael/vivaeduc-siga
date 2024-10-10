import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { FormStudent } from "./components/FormStudent";


export default function Students() {
  return (
    <LayoutWeb titlePage="Novo Alunos">
      <div className="flex flex-col gap-8">
        <FormStudent />
      </div>
    </LayoutWeb>
  );
}

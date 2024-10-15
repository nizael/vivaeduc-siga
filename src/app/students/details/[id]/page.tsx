import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { StudentInfo } from "./components/student-info/StudentInfo";
import { StudentClassrooms } from "./components/classsroon/StudentCassroom";

export default function StudentDetailsPage() {
  return (
    <LayoutWeb titlePage="Detalhes do Aluno">
      <div className="flex flex-col gap-4 grow">
          <StudentInfo />
          <StudentClassrooms />
      </div>
    </LayoutWeb>
  )
}
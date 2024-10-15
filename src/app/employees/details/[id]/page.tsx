import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { EmployeeData } from "./components/employee-data/EmployeeData";
import { RightSide } from "./components/right-side/RightSide";

export default function EmployeeDetailsPage() {
  return (
    <LayoutWeb titlePage="Detalhes do Funcionário">
      <div className="flex gap-4 h-full"> 
        <div className="flex flex-col gap-4 grow">
          <EmployeeData />
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  )
}
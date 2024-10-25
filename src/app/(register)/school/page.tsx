import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { SchoolData } from "./components/principal-data/SchoolData";
import { RightSide } from "./components/right-side/RightSide";

export default function SchoolPage() {
  return (
    <LayoutWeb titlePage="Detalhes da Escola">
      <div className="flex gap-4 h-full"> 
        <div className="flex flex-col gap-4 grow">
          <SchoolData />
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  )
}
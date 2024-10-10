import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { SchoolDetails } from "./components/principal-data/SchoolDetails";
import { RightSide } from "./components/right-side/RightSide";

export default function SchoolPage() {
  return (
    <LayoutWeb titlePage="Escola">
      <div className="flex gap-4 h-full"> 
        <div className="flex flex-col gap-4 grow">
          <SchoolDetails />
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  )
}
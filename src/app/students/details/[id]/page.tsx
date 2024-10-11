import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { UserDetails } from "./components/user-data/UserDetails";
import { RightSide } from "./components/right-side/RightSide";

export default function StudentDetailsPage() {
  return (
    <LayoutWeb titlePage="Detalhes do Aluno">
      <div className="flex gap-4 h-full"> 
        <div className="flex flex-col gap-4 grow">
          <UserDetails />
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  )
}
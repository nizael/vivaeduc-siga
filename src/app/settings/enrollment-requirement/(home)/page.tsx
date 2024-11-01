import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { enrollmentRequirementListAll } from "@/services/enrollmentRequirement/enrollmentRequirementGet";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { ListEnrollmentRequirement } from "./components/list-enrollmentRequirements/ListEnrollmentRequirements";
import { ToolBar } from "./components/ToolBar";
import { ModalEnrollmentRequirementCreate } from "../create/ModalEnrollmentRequirementCreate";

export default async function EnrollmentRequirementPage() {
  const { data, status } = await enrollmentRequirementListAll()

  return (
    <>
      <ModalEnrollmentRequirementCreate />
      <LayoutWeb titlePage={<TitlePage />}>
        <div className="flex flex-col gap-4 h-full">
          <ToolBar />
          {status === 200 && <ListEnrollmentRequirement enrollmentRequirements={data} />}
        </div>
      </LayoutWeb>
    </>
  )

}
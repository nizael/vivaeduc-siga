import { enrollmentRequirementListAll } from "@/services/enrollmentRequirement/enrollmentRequirementGet";
import { ListEnrollmentRequirement } from "./components/list-enrollmentRequirements/ListEnrollmentRequirements";
import { ToolBar } from "./components/ToolBar";
import { ModalEnrollmentRequirementCreate } from "../create/ModalEnrollmentRequirementCreate";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default async function EnrollmentRequirementPage() {
  const { data, status } = await enrollmentRequirementListAll()

  return (
    <>
      <ModalEnrollmentRequirementCreate />
      <LayoutApp >
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <TitlePage title="Requisitos de matrícula" />
            <ToolBar />
            {status === 200 && <ListEnrollmentRequirement listEnrollmentRequirements={data} />}
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  )

}
import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { TitlePage } from "./components/TitlePage";
import { EmployeeInfo } from "./components/employee-info/EmployeeInfo";
import { guardianDetails } from "@/services/guardian/guardianDetails";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { IPageProps } from "@/types/page-props/IPageProps";


export default async function GuardianUpdatePage(props: IPageProps) {
  const { status, data } = await guardianDetails(props.params.id)
  return (
    <LayoutWeb titlePage={<TitlePage />}>
      <div className="flex flex-col gap-4 grow">
        {status === 200 && data ? <EmployeeInfo employeeData={data} /> : <EmptyPage label="Não existem responsáveis cadastrados!" />}
        {/* <EmployeeClassrooms /> */}
      </div>
    </LayoutWeb>
  )
}
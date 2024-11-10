import { GuardianInfo } from "./components/guardian-info/GuardianInfo";
import { guardianDetails } from "@/services/guardian/guardianDetails";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { IPageProps } from "@/types/page-props/IPageProps";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";


export default async function GuardianUpdatePage(props: IPageProps) {
  const { status, data } = await guardianDetails(props.params.id)
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <TitlePage title="Atualizar Responsável" />
        {status === 200 && data ? <GuardianInfo guardianData={data} /> : <EmptyPage label="Não existem responsáveis cadastrados!" />}
        {/* <EmployeeClassrooms /> */}
      </div>
    </LayoutApp>
  )
}
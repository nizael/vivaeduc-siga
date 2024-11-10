import { GuardianInfo } from "./components/guardian-info/GuardianInfo";
import { ListDependents } from "./components/dependents/ListDependents";
import { PaymentHistory } from "./components/paument-history/PaymentHistory";
import { guardianDetails } from "@/services/guardian/guardianDetails";
import { EmptyPage } from "@/components/empty-state/EmptyPage";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { TitlePage } from "@/components/templates/title-page/TitlePage";

const historyPayments = [
  { id: '1', code: '#1125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '2', code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '3', code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '4', code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
]

interface IGuardianDetailsPageProps {
  params: { id: string }
  searchParams: object
}

export default async function GuardianDetailsPage(props: IGuardianDetailsPageProps) {
  const { status, data } = await guardianDetails(props.params.id)
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <TitlePage title="Detalhes do Responsável" />
        {status === 200 && data ? <GuardianInfo guardianData={data} /> : <EmptyPage label="Responsável não encontrado!" />}
        <ListDependents />
        <PaymentHistory historyPayments={historyPayments} />
      </div>
    </LayoutApp>
  )
}
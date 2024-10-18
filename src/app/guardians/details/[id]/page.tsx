import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { GuardianInfo } from "./components/guardian-info/GuardianInfo";
import { ListDependents } from "./components/dependents/ListDependents";
import { PaymentHistory } from "./components/paument-history/PaymentHistory";
import { guardian } from "../../../../di/dependencyInjection";
import { guardianDetails } from "../../../../services/guardian/guardianDetails";
import { EmptyStateGuardian } from "../../(home)/components/empty-state/EmptyStateGuardian";

const historyPayments = [
  { id: '1', code: '#1125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '2', code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '3', code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '4', code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '5',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '6',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '7',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '8',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
]

interface IGuardianDetailsPageProps {
  params: { id: string }
  searchParams: object
}

export default async function GuardianDetailsPage(props: IGuardianDetailsPageProps) {
  const { status, data } = await guardianDetails(props.params.id)
  return (
    <LayoutWeb titlePage="Detalhes do Responsável">
      <div className="flex flex-col gap-4 grow">
        {status === 200 && data ? <GuardianInfo guardianData={data} /> : <EmptyStateGuardian />}
        <ListDependents />
        <PaymentHistory historyPayments={historyPayments} />

      </div>
    </LayoutWeb>
  )
}
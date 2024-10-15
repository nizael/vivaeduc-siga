import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { GuardianInfo } from "./components/guardian-info/GuardianInfo";
import { ListDependents } from "./components/dependents/ListDependents";
import { PaymentHistory } from "./components/paument-history/PaymentHistory";

const historyPayments = [
  { id: '1',code: '#1125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '2',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '3',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  { id: '4',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '5',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '6',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '7',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
  // { id: '8',code: '#2125469654', date: '21/05/2024', value: 'R$ 50,00', status: 'Concluido', },
]

export default function GuardianDetailsPage() {
  return (
    <LayoutWeb titlePage="Detalhes do Responsável">
      <div className="flex flex-col gap-4 grow">
        <GuardianInfo />
        <ListDependents />
        <PaymentHistory historyPayments={historyPayments}/>
      </div>
    </LayoutWeb>
  )
}
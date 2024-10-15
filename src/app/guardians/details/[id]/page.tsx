import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { GuardianInfo } from "./components/guardian-info/GuardianInfo";
import { ListDependents } from "./components/dependents/ListDependents";
import { PaymentHistory } from "./components/paument-history/PaymentHistory";

export default function GuardianDetailsPage() {
  return (
    <LayoutWeb titlePage="Detalhes do Responsável">
      <div className="flex flex-col gap-4 grow">
        <GuardianInfo />
        <ListDependents />
        <PaymentHistory />
      </div>
    </LayoutWeb>
  )
}
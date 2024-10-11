import { LayoutWeb } from "@/components/_layout/LayoutWeb";
import { UserDetails } from "./components/user-data/UserDetails";
import { ListDependents } from "./components/dependents/ListDependents";
import { PaymentHistory } from "./components/paument-history/PaymentHistory";

export default function GuardianDetailsPage() {
  return (
    <LayoutWeb titlePage="Detalhes do Responsável">
      <div className="flex flex-col gap-4 grow">
        <UserDetails />
        <ListDependents />
        <PaymentHistory />
      </div>
    </LayoutWeb>
  )
}
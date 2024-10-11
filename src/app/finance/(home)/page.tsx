import { LayoutWeb } from "../../../common/components/_layout/LayoutWeb";
import { BalanceAnalytics } from "./components/balance-analytics/BalanceAnalytics";
import { KpiSection } from "./components/kpi-section/KpiSection";

export default function Finance() {
  return (
    <LayoutWeb titlePage="Financeiro">
      <div className="flex flex-col gap-8">
        <KpiSection />
        <BalanceAnalytics />
      </div>
    </LayoutWeb>
  );
}

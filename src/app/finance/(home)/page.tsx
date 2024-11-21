import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { BalanceAnalytics } from "./components/balance-analytics/BalanceAnalytics";
import { CashFlow } from "./components/cashflow/CashFlow";
import { KpiSection } from "./components/kpi-section/KpiSection";
import { NavBar } from "./components/nav-bar/NavBar";
import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default function Finance() {
  return (
    <LayoutApp>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Financeiro</h1>
        <LoadingSpinner>
          <NavBar />
          <KpiSection />
          <BalanceAnalytics />
          <CashFlow />
        </LoadingSpinner>
      </div>
    </LayoutApp>
  );
}

import { TitlePage } from "@/components/templates/title-page/TitlePage";
import { BalanceAnalytics } from "./components/balance-analytics/BalanceAnalytics";
import { CashFlow } from "./components/cashflow/CashFlow";
import { KpiSection } from "./components/kpi-section/KpiSection";
import { NavBar } from "./components/nav-bar/NavBar";
import { LayoutApp } from "@/components/layout/LayoutApp";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { env } from "@/configs/env";

export default function Finance() {
  return (
    <LayoutApp>
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Financeiro</h1>
          <KpiSection />
          <NavBar />
          {env.NODE_ENV !== 'production' && (
            <>
              <BalanceAnalytics />
              <CashFlow />
            </>
          )}
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}

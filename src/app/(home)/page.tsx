import { LayoutApp } from "@/components/layout/LayoutApp";
import { CalendarFinance } from "./components/calendar-finance/CalendarFinance";
import { Overview } from "./components/overview/Overview";
import { Performance } from "./components/performance/Perfomance";
import { RightSide } from "./components/right-side/RightSide";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default function Home() {
  return (
    <LayoutApp>
      <LoadingSpinner>
        <div className="flex flex-col gap-4 p-4">
          <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Dashboard</h1>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 grow">
              <Overview />
              <Performance />
              <CalendarFinance />
            </div>
            <RightSide />
          </div>
        </div>
      </LoadingSpinner>
    </LayoutApp>
  );
}

import { LayoutWeb } from "../../common/components/_layout/LayoutWeb";
import { CalendarFinance } from "./components/calendar-finance/CalendarFinance";
import { Overview } from "./components/overview/Overview";
import { Performance } from "./components/performance/Perfomance";
import { RightSide } from "./components/right-side/RightSide";

export default function Home() {
  return (
    <LayoutWeb titlePage="Dashboard">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 grow">
          <Overview />
          <Performance />
          <CalendarFinance />
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  );
}

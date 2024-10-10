import { LayoutWeb } from "../../common/components/_layout/LayoutWeb";
import { Calendar } from "./components/calendar/Calendar";
import { RightSide } from "./components/right-side/RightSide";
import { ToolBar } from "./components/ToolBar";

export default function CalenderPage() {
  return (
    <LayoutWeb titlePage="Calendário">
      <div className="flex gap-4 h-full">
        <div className="flex flex-col gap-8">
          <ToolBar />
          <Calendar />
        </div>
        <RightSide />
      </div>
    </LayoutWeb>
  );
}

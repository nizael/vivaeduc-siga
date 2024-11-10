import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { Calendar } from "./components/calendar/Calendar";
import { RightSide } from "./components/right-side/RightSide";
import { ToolBar } from "./components/ToolBar";

export default function CalendarPage() {
  return (
    <LayoutApp>
      <div className="flex gap-4 p-4">
        <div className="flex flex-col gap-4 grow">
          <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Calendário</h1>
          <ToolBar />
          <Calendar />
        </div>
        <RightSide />
      </div>
    </LayoutApp>
  );
}

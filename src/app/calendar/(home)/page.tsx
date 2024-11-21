import { LayoutApp } from "@/components/_layout-v2/LayoutApp";
import { Calendar } from "./components/calendar/Calendar";
import { RightSide } from "./components/right-side/RightSide";
import { CreateEvent } from "../create/CreateEvent";
import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";

export default function CalendarPage() {
  return (
    <>
      <CreateEvent />
      <LayoutApp>
        <LoadingSpinner>
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <h1 className="flex items-center font-semibold gap-2 text-[--text-primary]">Calendário</h1>
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-4 ">
                <Calendar />
              </div>
              <RightSide />
            </div>
          </div>
        </LoadingSpinner>
      </LayoutApp>
    </>
  );
}

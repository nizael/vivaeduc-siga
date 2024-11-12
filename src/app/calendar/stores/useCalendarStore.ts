import { IEvent } from "@/services/calendar-school/IEvent";
import { create } from "zustand";

interface IUseCalendarStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
  events?: IEvent[]
  setEvents(events: IEvent[]): void
  pushEvent(events: IEvent): void
}
export const useCalendarStore = create<IUseCalendarStore>((set, get) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
  setEvents: (events) => set({ events }),
  pushEvent: (events) => {
    const currentEvents = get().events
    if (currentEvents) set({ events: [...currentEvents, events] })
  }
}))
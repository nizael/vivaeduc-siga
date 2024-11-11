import { create } from "zustand";

interface IUseCalendarStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}
export const useCalendarStore = create<IUseCalendarStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
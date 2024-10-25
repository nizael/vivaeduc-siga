import { create } from "zustand";

interface IUseClassroomCreateModalStore {
  isOpen: boolean
  onClose(): void
  onOpen(): void
}

export const useClassroomCreateModalStore = create<IUseClassroomCreateModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen() {
    set({ isOpen: true })
  },
}))
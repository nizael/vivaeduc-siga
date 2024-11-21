import { create } from "zustand";

interface IUseLoadingSpinnerStore {
  isLoading: boolean
  setIsLoading(loading: boolean): void
}
export const useLoadingSpinnerStore = create<IUseLoadingSpinnerStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading })
}))
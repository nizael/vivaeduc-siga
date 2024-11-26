import { create } from "zustand";
import { IPlans, IProfile } from "../../../middlewares/Guardian";

interface IUseAuthData {
  userData?: IUserData
  setUserData(userData: IUserData): void
  reset(): void
}

export interface IUserData {
  schoolId: string | undefined;
  profile: IProfile;
  permissions: string[];
  plan: IPlans;
  name: string
  role: string
  employeeId: string
  image?: string
}
export const useAuthDataStore = create<IUseAuthData>((set) => ({
  setUserData: (userData) => {
    const data = { ...userData }
    set({ userData: data })
  },
  reset: () => {
    set({ userData: undefined })
  },
}))
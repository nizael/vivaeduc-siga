import { create } from "zustand";
import { IPlans, IProfile } from "../../../middlewares/Guardian";

interface IUseAuthData {
  userData?: IUserData
}

export interface IUserData {
  schoolId: string | undefined;
  profile: IProfile;
  permissions: string[];
  plan: IPlans;
  name: string
}
export const useAuthData = create<IUseAuthData>(()=>({}))
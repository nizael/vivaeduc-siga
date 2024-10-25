import { create } from "zustand";
import { IAddress } from "@/types/address/IAddress";
import { IGuardianInfo } from "../@types/IGuardianInfo";

export interface IGuardianData extends IGuardianInfo {
  id: string
}
interface IUseUpdateGuardianStore {
  guardian?: IGuardianData
  address?: IAddress
  setGuardian(guardian: IGuardianData): void
  setAddress(address: IAddress): void
  updateAttribute(attr: { [key: string]: string }): void
  updateAttributeAddress(attr: { [key: string]: string }): void
}

export const useUpdateGuardianStore = create<IUseUpdateGuardianStore>((set, get) => ({
  updateAttribute(attr) {
    const guardian = get().guardian || {} as IGuardianData
    const update = { ...guardian, ...attr }
    set({ guardian: update })
  },
  updateAttributeAddress(attr) {
    const address = get().address || {} as IAddress
    const update = { ...address, ...attr }
    set({ address: update })
  },
  setAddress(address) {
    set({ address })
  },
  setGuardian(guardian) {
    set({ guardian: guardian })
  },
}))
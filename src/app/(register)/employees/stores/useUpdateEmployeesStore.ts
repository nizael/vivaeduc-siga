import { create } from "zustand";
import { IEmployeeInfo } from "../@types/IEmployeeInfo";
import { emit } from "process";
import { IAddress } from "@/types/address/IAddress";

export interface IEmployeeData extends IEmployeeInfo {
  id: string
}
interface IUseUpdateEmployeeStore {
  employee?: IEmployeeData
  address?: IAddress
  setEmployee(employee: IEmployeeData): void
  setAddress(address: IAddress): void
  updateAttribute(attr: { [key: string]: string }): void
  updateAttributeAddress(attr: { [key: string]: string }): void
}

export const useUpdateEmployeesStore = create<IUseUpdateEmployeeStore>((set, get) => ({
  updateAttribute(attr) {
    const employee = get().employee || {} as IEmployeeData
    const update = { ...employee, ...attr }
    set({ employee: update })
  },
  updateAttributeAddress(attr) {
    const address = get().address || {} as IAddress
    const update = { ...address, ...attr }
    set({ address: update })
  },
  setAddress(address) {
    set({ address })
  },
  setEmployee(employee) {
    set({ employee })
  },
}))
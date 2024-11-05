import { create } from "zustand";
import { IAddress } from "@/types/address/IAddress";
import { IStudent } from "../@types/IStudentInfo";

export interface IStudentData extends IStudent {
  id: string
}
interface IUseUpdateStudentStore {
  student?: IStudentData
  address?: IAddress
  setStudent(student: IStudentData): void
  setAddress(address: IAddress): void
  updateAttribute(attr: { [key: string]: string }): void
  updateAttributeAddress(attr: { [key: string]: string }): void
}

export const useUpdateStudentStore = create<IUseUpdateStudentStore>((set, get) => ({
  updateAttribute(attr) {
    const student = get().student || {} as IStudentData
    const update = { ...student, ...attr }
    set({ student: update })
  },
  updateAttributeAddress(attr) {
    const address = get().address || {} as IAddress
    const update = { ...address, ...attr }
    set({ address: update })
  },
  setAddress(address) {
    set({ address })
  },
  setStudent(student) {
    set({ student })
  },
}))
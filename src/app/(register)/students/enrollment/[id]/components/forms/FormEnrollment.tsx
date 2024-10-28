import { CustomSelect } from "@/components/custom-select-v2/CustomSelect"
import { ClassroomIcon } from "@/components/icons/ClassroomIcon"
import { DotsIcon } from "@/components/icons/DotsIcon"
import { DropdownIcon } from "@/components/icons/DropdownIcon"
import { LocationIcon } from "@/components/icons/LocationsIcon"
import { ClassroomData } from "./ClassroomData"
import { DocumentData } from "./DocumentData"
import { PaymentPlan } from "./PaymentPlan"
import { DetailsBilling } from "./DetailsBilling"
import { DiscountData } from "./DiscountData"

export const FormClassroom = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <ClassroomData />
      <DocumentData />
      <PaymentPlan />
      <DiscountData />
      <DetailsBilling />
      <div className="flex items-center gap-4 justify-end">
        <button type="button" className="flex items-center px-4 h-[40px] text-[--text-primary] border border-[--bg-primary] rounded-full">Cancelar</button>
        <button type="submit" className="flex items-center px-4 h-[40px] text-gray-50 bg-[--bg-primary] rounded-full">Salvar</button>
      </div>
    </form>
  )
}